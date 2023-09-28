import { connection } from "../../data/data"
import bcrypt from 'bcrypt';

export  const addAdmin = async (req:any, res:any) => {
  try {
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;
   
    
const hash  = await bcrypt.hash(userpassword, 10);
//console.log(hash);

  
     
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


export const loginAdmin = (req:any, res:any) => {
  try {
   const {useremail, userpassword} = req.body;
   if(!useremail || !userpassword) throw new Error("no email or password found")
    const userLogin = 'SELECT * FROM user WHERE useremail = ?';
     
    connection.query(userLogin, [useremail], (err:any, rows:any) => {
      if(err){
        console.error('User retrieval error:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
      else {
        bcrypt.compare(userpassword, )
     }
    })
        

  } catch (error) {
    console.error(error)
  }
}