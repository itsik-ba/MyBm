import "./reg_log.scss";
import user_Icon from "../../assets/person.png"
import email_Icon from "../../assets/email.png"
import password_Icon from "../../assets/password.png"
import axios from "axios";
import { useState } from "react";



const Register = () => {
       
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

  const addAdmin = async (e:any)=> {
   console.log(e)
  e.preventDefault();

   //  validation here
   if(password.length < 3 || name.length < 3){
    setErrors("הסיסמה והשם חייבים להכיל לפחות 6 תווים")
   }
  else{
       try {
        console.log(name, email, password);
         const res = await axios.post("http://localhost:3000/",{
          name: name,
          email: email,
          password: password,
         })
         console.log(res.data);    
        setName("")
        setEmail("")
        setPassword("")
        // goToMainPage()
      
      } catch (error) {
        console.error(error);
       }
  }
  
} 
    
  const goToMainPage = () => {
    
    window.location.href="/main"
  }
  

  const goToLogin = ()=> {
   window.location.href="/login"
   }
  
  
  return (
    <div className="register">
      <div className="register__header">
        <div className="register__text">הרשמה</div>
        <div className="register__underline"></div>
      </div>

      <form onSubmit={addAdmin}>
         <div className="register__errors">
          <p className="register__errors__p">{errors}</p>
          </div>
      <div className="inputs">

       <div className="inputs__input">
          <img src={user_Icon} alt="user icon" className="inputs__input__img"/>
          <input 
          type="text" 
          className="inputs__input__inp" 
          placeholder="שם" 
          value={name}
          required 
          name="name" 
          onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        
        <div className="inputs__input">
          <img src={email_Icon} alt="email icon" className="inputs__input__img"/>
          <input 
          type="email" 
          className="inputs__input__inp" 
          placeholder="אימייל" 
          value={email}
          required 
          name="email" 
          onChange={(e) => {setEmail(e.target.value)}}/>
        </div>

        <div className="inputs__input">
          <img src={password_Icon} alt="password icon" className="inputs__input__img"/>
          <input 
          type="password" 
          className="inputs__input__inp" 
          placeholder="סיסמה" 
          value={password}
          required 
          name="password" 
          onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
    </div>
     <div className="subbmit-container">
      <button className="submit" type="submit">הרשמה</button>
      </div>
     </form>

     <button className="submit gray" onClick={goToLogin}>התחבר</button>
  </div>
      
  )
}


export default Register  

