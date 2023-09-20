import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignedInForm, setisSignedInForm] = useState(false);
  const toggleSignInForm = ()=>{
    setisSignedInForm(!isSignedInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
       <h1 className='font-bold text-3xl py-4'> {isSignedInForm?"Sign Up": "Sign In" }</h1>
       {isSignedInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='py-2 my-6 bg-red-700 w-full rounded-lg'>{isSignedInForm? "Sign Up":"Sign In"}</button>
        <p className='py-4 text-gray'>{isSignedInForm?"Already Registered?":"New to Neflix?"} <span onClick={toggleSignInForm} className='cursor-pointer hover:underline'>{isSignedInForm? "Sign In Now":"Sign up Now"}</span></p>
      </form>
    </div>
  )
}

export default Login;