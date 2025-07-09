import React, { useState } from 'react'
import { FaEye, FaEyeSlash} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({setIsLoggedIn}) => {
    
    const navigate = useNavigate();

    const [formData, setFormData]= useState({email:"",password:""});

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData)=>({
             ...prevData,
             [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In"); 
        navigate("/Dashboard") 


    }


  return (
    <form  onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input 
            required
            type='email'
            value= {formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            name='email'
            />
            
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input 
            required
            type={showPassword?("text"):("password")}
            value= {formData.password}
            onChange={changeHandler}
            placeholder="Enter email id"
            name='password'
            />

            <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?(<FaEyeSlash/>):(<FaEye/>)}
            </span>

            <Link to="#">
             <p>
                Forgot Password
             </p>
            </Link>
            
        </label>

        <button onClick={submitHandler}>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm