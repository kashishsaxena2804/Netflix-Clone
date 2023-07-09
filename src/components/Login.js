import { useNavigate, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig" ; 
import { useState } from "react";
import { error } from "jquery";

const Login = ( {page} ) => {
  const app = initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExist, setUserExist ] = useState(false);

  const auth = getAuth();

  const onSignInClickHandler = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
    .then(auth => {
      if(auth){
        navigate('/dashboard');
      }
    })
    .catch (error => setUserExist(true));
    //user-not-found
  }

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value)
  }

    return (
      <div className="login">
        <div className="holder">
          <h1 className="text-white">{ page ? 'Sign In' : 'Register' }</h1>
          <br/>
          <form>
            <input className="form-control " value={email} onChange={emailOnChangeHandler} type="email" placeholder="Email"/>
            <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button className="btn btn-danger btn-block" onClick={onSignInClickHandler}>{ page ? 'Sign In' : 'Register' }</button>
            <br/>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label text-white" for="flexCheckDefault">
                Remember Me
              </label>
            </div>
          </form>
          <br/>
          <br/>
          { isUserExist && <p className="text-danger">Sorry, we can't find an account with this email address. Please try again or create a new account.</p>}
          <div className="login-form-other">
            <div className="login-signup-now">{ page ? 'New to Netflix?' : 'Existing User' } &nbsp;
              <Link className=" "  to="/">{ page ? 'Sign up now' : 'Sign In' }</Link>
            </div>
          </div>
        </div>
        <div className="shadow"></div>
        <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/2f69dcef-463f-44da-b3b9-662b65f33f82/IN-en-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg" srcset="" alt=""></img>
      </div>
    )
  }
  
  export default Login;