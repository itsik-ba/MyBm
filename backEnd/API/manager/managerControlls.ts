import { connection } from "../../data/data"

export const addAdmin = (req:any, res:any) => {
    try {
    const {name, email, password} = req.body  
    console.log(name, email, password);

      const admin = 'INSERT INTO user (name, email, password) VALUES (?,? ,?'  
       connection.query(admin, [name ,email ,password], (err, data) => {
        if (err) {
          console.error("error creating new admin")
          res.status(500).send('Error inserting addmin');
           }
           else{
            res.status(200).send('addmin created');
           }
      } )
    } catch (error) {
      console.error(error)  
    }
}