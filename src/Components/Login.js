import React , { useState, useEffect } from 'react'
import Svg from '../image/login-image.svg';
import "./login.css";
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword
  } from "firebase/auth";
import { auth } from "../firebase.js"
import { Link, useNavigate } from "react-router-dom";




export default function Login() {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const navigate =useNavigate();
    const[isRegistered ,setResgistered]=useState(false);
    const[forget ,setforget]=useState(false);
    
    const[Registerinfo,setRegisterInfo]=useState({email:'',
  password:'',
confirmpassword:''});
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate("/Home");
          }
        });
      }, []);
    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange =(e)=>{
        setPassword(e.target.value);
    }
    const handleLogin =()=>{
        signInWithEmailAndPassword(auth,email,password).then(()=>{
            navigate('/Home')
        }).catch((err) =>
        alert(err.message));
    }
    const handleregister =()=>{
      if(Registerinfo.password!== Registerinfo.confirmpassword)
      {
        alert("password Don't match");
      }
      createUserWithEmailAndPassword(auth,Registerinfo.email,Registerinfo.password).then(()=>{
    
    }).catch((err) =>
    alert(err.message));

    }
    
    
   
    
  return (
    <div className="login">
      
        <h1 className="head">Todo-App</h1>
        <img src={Svg} className="svg"/>
        <div className="login-container">
          <p className ="welcome"> Welcome to Todo-App</p>
          {forget?
          <> <input type="email" placeholder='Email'   value={Registerinfo.email } onChange={(e)=>setRegisterInfo({...Registerinfo,email:e.target.value})}/>
       <button>Reset Password</button>
        </>:
         <>
           {
             isRegistered?
             <>
              <input type="email" placeholder='Email'   value={Registerinfo.email } onChange={(e)=>setRegisterInfo({...Registerinfo,email:e.target.value})}/>
                <input type="password"  placeholder='password'  value={Registerinfo.password } onChange={(e)=>setRegisterInfo({...Registerinfo,password:e.target.value})} />
                <input type="password" placeholder='confirm password' value={Registerinfo.confirmpassword } onChange={(e)=>setRegisterInfo({...Registerinfo,confirmpassword:e.target.value})} />
                <button  onClick={handleregister} className ="sign-in-register-button" >Register</button>
               <div> <p className='haveaccount'>Have Account Already?</p>
               
                    
                <button  onClick={()=>setResgistered(false)} className='login2'>Login</button>
                </div>
             </>:
             <>
              <input type="email"  placeholder='Email' onChange={handleEmailChange}  value={email}/>
              <br />
                <input type="password" placeholder='password' onChange={handlePasswordChange} value={password} />
              
                <button  onClick={handleLogin} className ="sign-in-register-button" >Login</button>
                <br/>
                <div>
                <p className='Register' onClick={()=>setResgistered(true)}>Register</p>
                <p className='forget' >Forget password?</p>
                </div>
  
               </>
              
           }
</>
}            
                    
               
        </div>

        </div>
  );
}

