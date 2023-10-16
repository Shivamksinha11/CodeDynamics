import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Cheetsheet = ({ cheatsheet }) => {
    const loaderContainer =  useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
        container: loaderContainer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../Json/work.json')
        })
    })
    
  return (
    <>
        <Head>
            <title>Code Dynamics - {cheatsheet.title}</title>
            <meta name="title" content={`Code Dynamics - ${cheatsheet.title}`} />
            <meta name="description" content=" codedynamics - cheetsheet : There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
            <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa"/>

            <meta property="og:type" content="website" />
            <meta property="og:url" content=" https://www.codedynamics.in/cheetsheet" />
            <meta property="og:title" content={`Code Dynamics - ${cheatsheet.title}`} />
            <meta property="og:site_name" content={`Code Dynamics - ${cheatsheet.title}`} />
            <meta property="og:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652610493/cheetsheet_preview_2fb2b6cc97.png?updated_at=2022-05-15T10:28:17.413Z" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.codedynamics.in/cheetsheet" />
            <meta property="twitter:title" content={`Code Dynamics - ${cheatsheet.title}`} />
            <meta property="twitter:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652610493/cheetsheet_preview_2fb2b6cc97.png?updated_at=2022-05-15T10:28:17.413Z" />
            <meta name="twitter:site" content="https://codedynamics.in" />
            <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
        </Head>
        <div className='w-full h-[1042px] bg-cover bg-right text-white bg-no-repeat' style={{backgroundImage:"url(/Images/cheethead.svg)"}}>
            <Navbar />
            <div className='flex flex-col-reverse md:flex-row mx-5 md:ml-20 justify-between'>
                <div className='flex flex-col justify-center'>
                    <div className='text-xl text-sky-200 md:text-sky-500'>Introducing</div>
                    <div className='text-3xl md:text-5xl font-bold text-slate-300 mt-3'>The {cheatsheet.title}</div>
                    <div className='text-lg text-slate-100 md:text-slate-400 my-6'>
                        Awesome cheatsheets for popular programming languages,<br className='hidden md:block' />
                        frameworks, development tools, Statistics and formulas. They<br className='hidden md:block'/>
                        include everything you should know in one single file.
                    </div>
                    <Link href='/cheetsheets' >
                        <a className='transition-all px-6 py-2 rounded-full bg-green-600 hover:shadow-lg hover:shadow-slate-700 w-40 text-center font-medium'>Get Started</a>
                    </Link>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Image src="/Images/cheetman.svg" width="600" height="544" />
                </div>
            </div>
        </div>
        <div className=' -mt-64 lg:-mt-96 md:ml-20 flex flex-col lg:flex-row items-center'>
            <div className="loaderContainer w-96" ref={loaderContainer} ></div>
            <h2 className='text-slate-300 font-semibold leading-10'>
                <span className='text-4xl'>Grab Your&#x27;s </span><br/>
                <span className='text-6xl'>{cheatsheet.title}</span>
            </h2>
        </div>
        <div className='flex justify-center lg:justify-between flex-wrap items-center px-5 md:mx-20 pb-40'>
            {cheatsheet.language.map((cheat, index) => {
                return(
                    <a href={`/pdf/${cheat.title}.pdf`} key={index} download={`${cheat.title}.pdf`} className='transition-all ease-in-out duration-300 w-80 h-20 p-5 bg-hackerrankCardColor hover:-translate-y-2 rounded-2xl neuro flex justify-between items-center mt-10'>
                        <h2 className='text-3xl font-semibold CardTitleColor'>{cheat.title}</h2>
                        <Image src={cheat.icon} width="44" height="50" />
                    </a>
                )
            })}
        </div>
        <Footer />
    </>
  )
}

export const getStaticProps = async () => {
    const res =  await fetch("https://codedynamics.herokuapp.com/api/cheetsheets?populate[0]=language")
    const cheatsheetData =  await res.json();

    return {
        props: {
            cheatsheet: cheatsheetData.data[0].attributes,
        },
        revalidate: 1,
    };
};

export default Cheetsheet
