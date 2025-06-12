import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom";
 import "./AuthStyles.css";
import AuthServices from '../../Services/AuthServices';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../Utils/ErrorMessage';
const Register = () => {
  const navigate=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [username,setUsername]=useState("");
//login function
const RegisterHandler=async (e)=>{
 try {
   e.preventDefault();
   const data={username,email,password};
   const res=await AuthServices.registerUser(data);
  toast.success(res.data.message)
  navigate("/login");
 } catch (err) {
      toast.error(getErrorMessage(err))
    console.log(err)
 }
}


  return (
     <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className="fa-solid fa-circle-user"></i>
        </div>
         <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="enter email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            value={password}
             onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-bottom">
          <p className="text-center">
            already a user? please
            <Link to="/login"> Login</Link>
          </p>
          <button type="submit" className="login-btn" onClick={RegisterHandler} >
            REGISTER
          </button>
        </div>
      </div>
      </div>

  )
}

export default Register
