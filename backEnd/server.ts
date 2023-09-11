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


  app.post('/register', (req:any, res:any) =>{
  try {
    console.log('Request Body:', req.body);
    const { username, useremail, userpassword} = req.body;

    const data = `INSERT INTO user (username, useremail, userpassword) VALUES ( ?, ?, ?)`;
     connection.query(data, [username, useremail, userpassword], (err, data) =>{
     console.log(err);
     if (data) {
        console.log(data);
        res.status(200).send({ message: 'User registered successfully' });
      } else {
        console.error(err);
        res.status(500).send({ error: 'Error registering user' });
       
      }
     });
  } catch (error:any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});


app.listen(3000, () => {
    console.log("server listen on port 3000");
  });