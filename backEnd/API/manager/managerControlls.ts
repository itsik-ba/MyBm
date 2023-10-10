import { connection } from "../../data/data"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { OkPacket, RowDataPacket } from 'mysql2';

interface User {
  email_hash: string;
  password_hash: string;
}

export  const addAdmin = async (req:any, res:any) => {
  try {
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;
   
    
const hash  = await bcrypt.hash(userpassword, 10);
   if (!username || !useremail || !userpassword) {
      throw new Error('Missing or invalid data in the request');
    }
      const data = 'INSERT INTO user (username, useremail, userpassword) VALUES(?, ?, ?)'
      if(!data) throw new Error('no data found')

    connection.query(data, [username, useremail, hash], (err, data) => {
     
      if (err) {
      console.error(err);
      res.status(500).send({ error: 'Error registering user' });
    } else {
      res.status(200).send({ message: 'User registered successfully' });
    }

    });
  } catch (error:any) {
    console.error(error)
    res.status(400).send({ error: error.message });
  }  
}


export const loginAdmin = async (req:any, res:any) => {



  
}