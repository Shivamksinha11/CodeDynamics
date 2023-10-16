import { useEffect, useRef } from 'react';
import Navbar from './Navbar'
import lottie from 'lottie-web';
import Head from 'next/head'

const Commingsoon = () => {
    const loaderContainer =  useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
        container: loaderContainer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../Json/soon.json')
        })
    })
  return (
    <>
        <Head>
            <title>Code Dynamics - Comming Soon</title>
            <meta name="title" content="Code Dynamics - Comming Soon" />
            <meta name="description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
            <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , Comming Soon , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa , Comming Soon , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa"/>

            <meta property="og:type" content="website" />
            <meta property="og:url" content=" https://www.codedynamics.in/commingsoon" />
            <meta property="og:title" content="Code Dynamics - Comming Soon" />
            <meta property="og:site_name" content="Code Dynamics - Comming Soon" />
            <meta property="og:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652610493/Comming Soon_preview_2fb2b6cc97.png?updated_at=2022-05-15T10:28:17.413Z" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.codedynamics.in/commingsoon" />
            <meta property="twitter:title" content="Code Dynamics - Comming Soon" />
            <meta property="twitter:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652610493/Comming Soon_preview_2fb2b6cc97.png?updated_at=2022-05-15T10:28:17.413Z" />
            <meta name="twitter:site" content="https://codedynamics.in" />
            <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
        </Head>
        <div className='flex flex-col justify-between w-full h-screen bg-cover bg-center text-white bg-no-repeat' style={{backgroundImage:"url(https://res.cloudinary.com/nextgenui/image/upload/v1652343173/Dark_c17a8b2915.svg?updated_at=2022-05-12T08:12:56.519Z)"}}>
            <Navbar />
            <div className='flex mx-20'>
                <div className="loaderContainer h-[550px] w-full flex justify-center items-center" ref={loaderContainer} ></div>
            </div>
            <div className='flex flex-col sm:flex-row items-center sm:justify-between mx-5 md:mx-10 pb-5'>
                <div className='text-sm text-white'>© Copyrights Code Dynamics | All Rights Reserved</div>
                <div className='text-md text-white space-x-3'>
                    <a href="https://www.youtube.com/channel/UCkAH4OJZlDZIDiS16nGFWEA"><i className="fab fa-youtube"></i></a>
                    <a href="https://twitter.com/NextGen_UI"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/Next-Gen-UI"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/nextgen-ui-26a02922a/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/nextgenui/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Commingsoon