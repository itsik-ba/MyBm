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
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;

    
    connection.query('INSERT INTO user (username, useremail, userpassword) VALUES (?, ?, ?)', [username, useremail, userpassword],
    
    (err, result)=>{
       if (err){
        console.error(err);
        res.status(500).send({ message: 'Error registering user' });
    }else{
        console.log(result);
        res.status(200).send({ message: 'User registered successfully' });
         } 
      }
    )
     
} catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error registering user' });
  }
  });






app.listen(3000, () => {
    console.log("server listen on port 3000");
  });