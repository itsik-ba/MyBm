
import "./reg_log.scss";
import user_Icon from "../../assets/person.png"
import email_Icon from "../../assets/email.png"
import password_Icon from "../../assets/password.png"
import axios from "axios";

const Register = () => {
  
  const addAdmin = async (e:any)=> {
   
  e.preventDefault();
     const parms = e.target;
     const name = parms.name.value;
     const email = parms.email.value;
     const password = parms.password.value;
     console.log(name, email, password);
     
     try {
       const res = await axios.post("http://localhost:3000/register",{
        name: name,
        email: email,
        password: password,
       })
       console.log(res.data);
    } catch (error) {
      console.error(error);
     }
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
          <p className="register__errors__p">{}</p>
          </div>
      <div className="inputs">

       <div className="inputs__input">
          <img src={user_Icon} alt="user icon" className="inputs__input__img"/>
          <input type="text" className="inputs__input__inp" placeholder="שם" required name="name"/>
        </div>
        
        <div className="inputs__input">
          <img src={email_Icon} alt="email icon" className="inputs__input__img"/>
          <input type="email" className="inputs__input__inp" placeholder="אימייל" required name="email"/>
        </div>

        <div className="inputs__input">
          <img src={password_Icon} alt="password icon" className="inputs__input__img"/>
          <input type="password" className="inputs__input__inp" placeholder="סיסמה" required name="password"/>
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

