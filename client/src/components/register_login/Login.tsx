
import "./reg_log.scss";
import email_Icon from "../../assets/email.png"
import password_Icon from "../../assets/password.png"
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  
  
    const userLogin = (event:any)=> {
     event.preventDefault();
     console.log("object");
     
     try {
      



     } catch (error) {
      console.error(error);
     }
}
  



  return (
    <div className="register">
      <div className="register__header">
        <div className="register__text">התחבר</div>
        <div className="register__underline"></div>
      </div>
      <form className="register__form" onSubmit={userLogin}>
         <div className="register__errors">
          <p className="register__errors__p">{error}</p>
          </div>
      <div className="inputs">
       <div className="inputs__input">
          <img src={email_Icon} alt="email icon" className="inputs__input__img"/>

          <input 
          type="email" 
          className="inputs__input__inp" 
          placeholder="אימייל" 
          required
          name="email" 
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>

        <div className="inputs__input">
          <img src={password_Icon} alt="password icon" className="inputs__input__img"/>

          <input 
          type="password" 
          className="inputs__input__inp" 
          placeholder="סיסמה" 
          name="password" 
          value={password}
          required
          onChange={(e) => {setPassword(e.target.value)}}
          />
         
        </div>
    </div>
    <div className="password-forgot"> שכחתה סיסמה?
      <span className="password-forgot__span">לחץ כאן </span>
    </div> 
    
    <div className="subbmit-container">
      <button className="submit" onSubmit={userLogin}>התחבר</button>
    </div>

    </form>
  </div>
      
  )
  
}

export default Login