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

  const { useremail, userpassword } = req.body;
  
  connection.query('SELECT useremail, userpassword FROM user WHERE useremail = ?', [useremail], async (error, results) => {
    if (error) {
        console.error('Database query error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

    // Explicitly cast results to User[]
    const users = results as User[];

    if (users.length > 0) {
        const user = users[0];
 console.log(user);
        // Compare the provided email and password with the stored hashed values
        const emailMatch = await bcrypt.compare(useremail, user.email_hash);

        const passwordMatch = await bcrypt.compare(userpassword, user.password_hash);
        
         console.log(emailMatch, useremail, passwordMatch, userpassword);
        if (emailMatch && passwordMatch) {
            // Email and password match, authentication successful
            res.status(200).json({ message: 'Login successful' });
        } else {
            // Email and password do not match, authentication failed
            res.status(401).json({ message: 'Authentication failed' });
        }
    } else {
        // Email not found or results is empty
        res.status(401).json({ message: 'User not found' });
    }
});
     
  
}