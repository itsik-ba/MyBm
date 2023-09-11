import { connection } from "../../data/data"

export const addAdmin = (req:any, res:any) => {
  try {
    
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;
    console.log(username, useremail, userpassword);
    
    if (!username || !useremail || !userpassword) {
      throw new Error('Missing or invalid data in the request');
    }

    const data = 'INSERT INTO user (username, useremail, userpassword) VALUES(?, ?, ?)';
      if(!data) throw new Error('no data found')

    connection.query(data, [username, useremail, userpassword], (err, data) => {
     console.log(err);
    
     if (err) {
      console.error(err);
      res.status(500).send({ error: 'Error registering user' });
    } else {
      console.log(data);
      res.status(200).send({ message: 'User registered successfully' });
    }

    });
  } catch (error:any) {
    console.error(error)
    res.status(400).send({ error: error.message });
  }  
}