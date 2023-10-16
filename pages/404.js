import { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import lottie from 'lottie-web';
import Link from 'next/link'
import Head from 'next/head';
const Error = () => {
    const loaderContainer =  useRef(null);
        useEffect(() => {
            lottie.loadAnimation({
            container: loaderContainer.current,
                renderer:'svg',
                loop:true,
                autoplay:true,
                animationData: require('../Json/loading404.json')
            })
        })
    return (
    <>
        <Head>
            <title>Code Dynamics - 404</title>
            {/* meta tags */}
            <meta name="title" content="Code Dynamics - 404" />
            <meta name="description" content="Code Dynamics - We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta name="author" content="Code Dynamics" />
            <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa  "/>
            {/* Open Graph / Facebook  */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.codedynamics.in/" />
            <meta property="og:title" content="Code Dynamics - 404" />
            <meta property="og:site_name" content="Code Dynamics" />
            <meta property="og:description" content="Code Dynamics - We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651836557/Screenshot_37_f63f11ed80.png?updated_at=2022-05-06T11:29:20.489Z" />
            {/* Twitter  */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.codedynamics.in/" />
            <meta property="twitter:title" content="Code Dynamics - 404" />
            <meta property="twitter:description" content="Code Dynamics - We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651836557/Screenshot_37_f63f11ed80.png?updated_at=2022-05-06T11:29:20.489Z" />
            <meta name="twitter:site" content="https://codedynamics.in" />
            <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
        </Head>
        <Navbar/>
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full flex justify-center lg:w-1/2">
                <div className=" loaderContainer w-1/2 h-96 flex justify-center items-center" ref={loaderContainer} ></div>
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-300">Looks like you have found the doorway to the great nothing</h1>
                <p className="py-4 text-lg font-normal text-gray-200">The content you are looking for doesnt exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-lg font-normal text-gray-200">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Link href="/" >
                    <a className="w-full lg:w-96 my-4 border rounded-md px-1 sm:px-16 md:px-10 py-5 text-center text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 cursor-pointer" >Go back to Homepage</a>
                </Link>
            </div>
        </div>
    </>
  );
};

export default Error;