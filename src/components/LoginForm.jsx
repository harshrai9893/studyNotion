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
    <form  onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className='w-full'>
            <p className='text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-400'>*</sup>
            </p>
            <input 
            required
            type='email'
            value= {formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            name='email'
            className='bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]   '
            />
            
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem ] text-gray-100 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-400'>*</sup>
            </p>
            <input 
            required
            type={showPassword?("text"):("password")}
            value= {formData.password}
            onChange={changeHandler}
            placeholder="Enter Your Password"
            name='password'
            className='bg-gray-800 rounded-[0.5rem] text-gray-100 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer '
            onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?
                (<FaEyeSlash fontSize={24} fill='#AFB2BF'/>)
                :(<FaEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
             <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'>
                Forgot Password
             </p>
            </Link>
            
        </label>

        <button className='bg-yellow-400 text-gray-900 rounded-[8px] py-[8px] px-[12px] font-medium mt-5' >
            Sign In
        </button>
    </form>
  )
}

export default LoginForm