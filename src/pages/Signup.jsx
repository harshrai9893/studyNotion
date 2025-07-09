import React from 'react'
import Templates from '../components/Templates'
import SignupImg from '../assets/SignupImg.png'


const Signup = ({setIsLoggedIn}) => {
  return (
     <Templates
    title="Join the millions learning to code with studyNotion for free"
    desc1="Build skills for today, tomorrow,and beyond."
    desc2="Education to future-proof your career."
    image = {SignupImg}
    formtype= "signup"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Signup