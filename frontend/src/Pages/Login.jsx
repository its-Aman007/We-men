import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

  const [currentState,setCurrentState]=useState('Sign Up');
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

      </div>
      <input type="text" placeholder='Username' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <input type="email" placeholder='Email' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <input type="password" placeholder='Password' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      {currentState === 'Log In' && (
        <div className='w-full text-right'>
          <Link to='/forgot-password' className='text-sm text-blue-500 hover:underline'>Forgot password?</Link>
        </div>
      )}
      {currentState==='Sign Up' && <input type="password" placeholder='Confirm Password' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />}
      <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300'>{currentState}</button>
      <p className='text-sm'>
        {currentState==='Sign Up' ? 'Already have an account?' : "Don't have an account?"}
        <span
          className='text-blue-500 cursor-pointer ml-1'
          onClick={() => setCurrentState(currentState === 'Sign Up' ? 'Log In' : 'Sign Up')}
        >
          {currentState === 'Sign Up' ? 'Log In' : 'Sign Up'}
        </span>
      </p>

      
    </form>
  )
}

export default Login
