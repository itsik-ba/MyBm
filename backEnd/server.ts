import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());


const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };

export const connection = mysql.createConnection(dbConfig);

connection.connect( (error: any)=> {
    if (error) {
      console.log(error);
      console.log("MySQL connection error");
    } else {
      console.log("MySQL connection succeeded");
    }
  });


  app.post('/register', (req, res) =>{
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(name, email, password);

    connection.query('INSERT INTO user (name, email, password) VALUES (?, ?, ?)', [name, email, password],

    (err, result)=>{
        if (result){
          res.send(result);
        }else{
          res.send({massage:"error register user"})
        }
      }
    )
     
} catch (error) {
    console.error(error)
  }
  });






app.listen(3000, () => {
    console.log("server listen on port 3000");
  });