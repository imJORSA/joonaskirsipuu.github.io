import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gray-600'>
      <Navbar />

        {/* CONTAINER */}
        <div className='w-full h-1/3 mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-4xl sm:text-7xl font-bold text-blue-100'>About</h1>
        </div>
    </div>
  )
}

export default About