

export const getAllUsers = async (req:any, res:any) => {
    try {
    
  
      res.send({  });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }