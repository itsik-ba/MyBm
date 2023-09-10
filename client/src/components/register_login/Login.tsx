
import "./reg_log.scss";
import email_Icon from "../../assets/email.png"
import password_Icon from "../../assets/password.png"

const Login = () => {
  const userLogin = (event:any)=> {
     event.preventDefault();
     console.log("object");
   }
  











  return (
    <div className="register">
      <div className="register__header">
        <div className="register__text">התחבר</div>
        <div className="register__underline"></div>
      </div>
      <form className="register__form" onSubmit={userLogin}>
         <div className="register__errors">
          <p className="register__errors__p">{}</p>
          </div>
      <div className="inputs">
       <div className="inputs__input">
          <img src={email_Icon} alt="email icon" className="inputs__input__img"/>
          <input type="email" className="inputs__input__inp" placeholder="אימייל" required/>
        </div>
        <div className="inputs__input">
          <img src={password_Icon} alt="password icon" className="inputs__input__img"/>
          <input type="password" className="inputs__input__inp" placeholder="סיסמה" required/>
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