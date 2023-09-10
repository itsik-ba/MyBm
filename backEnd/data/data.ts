import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();


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