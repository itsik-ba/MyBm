import { connection } from "../../data/data"

export const addAdmin = (req:any, res:any) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log(name, email, password);

    connection.query('INSERT INTO user (name, email, password) VALUES(?, ?, ?)', [name, email, password],

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



}