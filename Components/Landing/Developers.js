import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Developers = ({ DevelopersData }) => {
  return (
    <div className='my-20' id='developer'>
      <div className="flex flex-col items-center justify-center text-center  text-gray-400 font-roboto">
        <div className="uppercase text-md tracking-wider">who’s behind</div>
        <div className="text-5xl text-white font-semibold my-5">Meet the developers</div>
        <div className="text-lg max-w-sm mb-10">We all try to be consistent with our way of providing you witn the resource to take you one step further in your journey.</div>
      </div>
        
      <div className='flex flex-wrap justify-evenly items-center'>
        {DevelopersData.developers.map((developer, index) => {
          return(
            <div className='w-72 mt-5' key={index}>
              <Image src={developer.profile} alt={developer.name} width='300' height='280' className='w-96 h-60 rounded-t-lg' />
              <div className='bg-linearbodyresumedark backdrop-blur-lg h-56 w-full -mt-20 p-5 rounded-b-lg flex flex-col justify-between items-center font-roboto'>
                <Link href={developer.url} >
                  <a className='border-l-4 border-yellow-400 flex pl-3 text-white text-xl'>
                    {developer.name}
                  </a>
                </Link>
                <div className='text-gray-300 text-base'>{developer.designation}</div>
                
                <div className="mt-5 flex flex-col">
                  <div className="flex flex-row justify-center">
                    {/* website */}
                    <a href={developer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="website"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl">
                      <i className="fas fa-globe"></i>
                    </a>
                    {/* Linkedin */}
                    <a href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl ml-6">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* Github */}
                    <a href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl ml-6">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="flex flex-row justify-center mt-3">
                    {/* Twitter */}
                    <a href={developer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl">
                      <i className="fab fa-twitter"></i>
                    </a>
                    {/* Instagram */}
                    <a href={developer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl ml-6">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        }).slice(0,3)}
      </div>
<div className='flex flex-wrap justify-evenly items-center'>
        {DevelopersData.developers.map((developer, index) => {
          return(
            <div className='w-72 mt-5' key={index}>
              <Image src={developer.profile} alt={developer.name} width='300' height='280' className='w-96 h-60 rounded-t-lg' />
              <div className='bg-linearbodyresumedark backdrop-blur-lg h-56 w-full -mt-20 p-5 rounded-b-lg flex flex-col justify-between items-center font-roboto'>
                <Link href={developer.url} >
                  <a className='border-l-4 border-yellow-400 flex pl-3 text-white text-xl'>
                    {developer.name}
                  </a>
                </Link>
                <div className='text-gray-300 text-base'>{developer.designation}</div>
                
                <div className="mt-5 flex flex-col">
                  <div className="flex flex-row justify-center">
                    {/* website */}
                    <a href={developer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="website"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl">
                      <i className="fas fa-globe"></i>
                    </a>
                    {/* Linkedin */}
                    <a href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl ml-6">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* Github */}
                    <a href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl ml-6">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="flex flex-row justify-center mt-3">
                    {/* Twitter */}
                    <a href={developer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl">
                      <i className="fab fa-twitter"></i>
                    </a>
                    {/* Instagram */}
                    <a href={developer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl text-white text-xl ml-6">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        }).slice(3,6)}
      </div>
    </div>
  )
}

export default Developers
