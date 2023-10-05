
import "./reg_log.scss";
import email_Icon from "../../assets/email.png"
import password_Icon from "../../assets/password.png"
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  
  
    const userLogin = async (event:any)=> {
     event.preventDefault();
    
     try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
 
      if (response.status === 200) {
        // User is authenticated, handle the successful login
        console.log('Login successful');
        window.location.href="/main"
    } else {
        // Authentication failed, handle the error
        console.error('Authentication failed');
    }
      

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
      <button className="submit" type="submit">התחבר</button>
    </div>

    </form>
  </div>
      
  )
  
}

export default Login