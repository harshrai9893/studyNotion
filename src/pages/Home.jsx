 import React from 'react'
 import { IoMdArrowRoundForward } from "react-icons/io";

 
 const Home = () => {
   return (
     <div className=' flex flex-col  items-center h-[89.4vh] w-11/12 mx-auto '>

     {/* upper button  */}
     <div className='mt-20 flex flex-row  text-gray-400 bg-gray-800 py-2.5 px-10 me-2 mb-2 text-lg 
       rounded-3xl border gap-3 font-bold hover:bg-gray-700 '>  
     
       
       <button >
        Become an Instructor
      </button>
      <div className='py-1'>
         <IoMdArrowRoundForward className=''/>
      </div>

     </div>

     {/* content  */}
     <div className=' mt-15 w-11/12'>
      <h1 className=' flex text-5xl text-gray-100 item-center justify-center font-bold gap-2 '>
        Empower Your Future with 
        <span className=' flex font-bold py-2 
        text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> 
            Coding Skills</span>
             </h1>
      <h2 className='text-gray-400 mt-6 text-xl font-bold'>
        With our online coding courses, you can learn at your own pace, 
        from anywhere in the world, and get access to a wealth of  resources,
        <span className='flex items-center justify-center'>including hands-on projects, quizzes, and personalized feedback from instructors.</span>
        </h2>
     </div>

     {/* lower button */}
     <div  className='flex gap-6 mt-20'>
      <button  className="bg-yellow-500 text-black py-3 
            px-8 rounded-xl hover:bg-yellow-300 border font-bold ">Learn More </button>
      <button  className="bg-gray-800 text-gray-100 py-3 
            px-8 rounded-xl border hover:bg-gray-700 font-bold  "> Book a Demo</button>
     </div>


     </div>
   )
 }
 
 export default Home