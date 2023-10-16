import { useEffect, useRef } from 'react';
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import lottie from 'lottie-web';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const Aboutus = ({ githubData }) => {
    const loaderContainer =  useRef(null);
    const loaderContainer2 =  useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
        container: loaderContainer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../Json/flow.json')
        })
        lottie.loadAnimation({
        container: loaderContainer2.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../Json/flow.json')
        })
    })
  return (
    <>
        <Head>
            <title>Code Dynamics - About Us</title>
            <meta name="title" content="Code Dynamics - About Us" />
            <meta name="description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
            <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa"/>

            <meta property="og:type" content="website" />
            <meta property="og:url" content=" https://www.codedynamics.in/aboutus" />
            <meta property="og:title" content="Code Dynamics - About Us" />
            <meta property="og:site_name" content="Code Dynamics - About Us" />
            <meta property="og:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652610495/aboutus_preview_47fd862e92.png?updated_at=2022-05-15T10:28:18.284Z" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.codedynamics.in/aboutus" />
            <meta property="twitter:title" content="Code Dynamics - About Us" />
            <meta property="twitter:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
            <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652610495/aboutus_preview_47fd862e92.png?updated_at=2022-05-15T10:28:18.284Z" />
            <meta name="twitter:site" content="https://codedynamics.in" />
            <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
        </Head>
        <div className='w-full h-[70vh] bg-cover bg-bottom bg-no-repeat' style={{backgroundImage:"url(https://res.cloudinary.com/nextgenui/image/upload/v1652383104/curved_1_4eb425b742.svg?updated_at=2022-05-12T19:18:26.440Z)"}}>
            <Navbar />
        </div>
        <div className='p-10 flex flex-col md:flex-row mx-5 md:mx-60 rounded-3xl bg-gray-900 bg-opacity-60 -mt-52 md:-mt-32 font-sans'>
            <div className='md:w-1/3 h-48 p-5 flex flex-col items-center justify-between'>
                <h1 className='text-5xl text-pink-400'>3000+</h1>
                <span className='text-xl text-blue-500'>Codes</span>
                <span className='text-center text-slate-300'>From Hello World!, to Array, Tree, algorithms or graphs, you are covered</span>
            </div>
            <div className='md:w-1/3 h-48 p-5 flex flex-col items-center justify-between md:border-x-2 md:border-slate-800'>
                <h1 className='text-5xl text-pink-400'>10+</h1>
                <span className='text-xl text-blue-500'>Skills</span>
                <span className='text-center text-slate-300'>Hone the skills, challange yourself daily and unleash your tallent</span>
            </div>
            <div className='md:w-1/3 h-48 p-5 flex flex-col items-center justify-between'>
                <h1 className='text-5xl text-pink-400'>4</h1>
                <span className='text-xl text-blue-500'>Platforms</span>
                <span className='text-center text-slate-300'>Practice on leading platforms so that you can enhance your skills</span>
            </div>
        </div>
        <div className='flex flex-col my-20'>
            {/* upper water flow animation */}
            <div className="loaderContainer z-0" ref={loaderContainer} ></div>
            {/* Main frame card */}
            <div className='flex flex-col md:flex-row  items-center px-10 md:px-20 z-10 bg-black -mt-20'>
                <div className='md:w-1/2'>
                    <div className='flex flex-col md:flex-row justify-evenly'>
                        <div className='w-64 mt-10 text-center md:text-left'>
                            <div className='text-white'>
                                <i className="fa-solid fa-newspaper"></i>
                            </div>
                            <div className='text-xl text-blue-400 my-2 font-semibold'>All Resources</div>
                            <div className='text-base text-stone-500'>Built by developers for developers. Here you will find everything thet you are looking for may it be codes, cheetsheet, resource to enhance your Skills.</div>
                        </div>
                        <div className='w-64 mt-10 text-center md:text-left'>
                            <div className='text-white'>
                                <i className="fa-solid fa-clock"></i>
                            </div>
                            <div className='text-xl text-blue-400 my-2 font-semibold'>Save Time</div>
                            <div className='text-base text-stone-500'>Instead of looking for the resources of different skills platforms at different places, switch to a better way and find it all at one place.</div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-evenly'>
                        <div className='w-64 mt-10 text-center md:text-left'>
                            <div className='text-white'>
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <div className='text-xl text-blue-400 my-2 font-semibold'>Community</div>
                            <div className='text-base text-stone-500'>A community based contribution, bringing you the proper required resources accross multiple platforms, so that that you won&#x27;t have to look anywhere else.</div>
                        </div>
                        <div className='w-64 my-10 text-center md:text-left'>
                            <div className='text-white'>
                                <i className="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <div className='text-xl text-blue-400 my-2 font-semibold'>More Comming soon</div>
                            <div className='text-base text-stone-500'>Even will all these, there is plenty more that we&#x27;ll be bringing to you very soon. Whatever the problem there would be a solution just waiting for you, to be discovered.</div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 hidden md:flex items-center justify-center -mt-20'>
                    <div className='neuro rounded-2xl about-mainframe mt-20'>
                        <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1652387714/Site_Background_d58edb5343.svg?updated_at=2022-05-12T20:35:19.922Z" className='rounded-2xl' width="450" height="250" />
                    </div>
                </div>
            </div>
            {/* Lower water flow animation */}
            <div className="loaderContainer z-0 rotate-180" ref={loaderContainer2} ></div>
        </div>
        {/* why code dynamics section */}
        <div className='mx-5 md:mx-36 my-10 flex flex-col-reverse md:flex-row '>
            <div className='md:w-1/2'>
                <div className='text-4xl font-semibold' style={{color:'#84A3D7'}}>Why?</div>
                <div className='text-4xl font-semibold mt-2 italic' style={{color:'#B6506D'}}>Code Dynamics</div>
                <div className='md:hidden mt-10'>
                    <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1652461187/man_8e5d58840f.svg?updated_at=2022-05-13T17:00:37.151Z" width="733" height="550"/>
                </div>
                <div className='text-lg md:mt-10 font-light text-slate-300'>
                    <p>There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ It&#x27;s an integral part of every step of the software development process ”. Every skill takes practice to apply and master.</p>
                    <p className='my-5'>Many developers think that becoming a better problem solver means being able to solve more problems, faster. But that&#x27;s not true — it means being able to <span className='font-normal italic text-slate-300'>find the best solution to a problem,</span> and then put that solution in place.</p>
                    <p>We aspire to fill that gap, by providing the best resources for the developers to learn from, regardless of the platform they choose.</p>
                </div>
            </div>
            <div className='md:w-1/2 hidden md:flex flex-row justify-end'>
                <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1652461187/man_8e5d58840f.svg?updated_at=2022-05-13T16:59:50.249Z" width="500" height="500" />
            </div>
        </div>
        {/* Github Card */}
        
        <div className='mx-5 md:mx-20 lg:mx-32 2xl:mx-40 mt-20 p-8 lg:p-10 xl:p-16 rounded-3xl mb-10 githubCard'>
            <div className='flex justify-between'>
                <div className='text-slate-400'>
                    <div className='text-base sm:text-xl lg:text-3xl xl:text-5xl font-semibold'>Next-Gen-UI/</div>
                    <div className='text-base sm:text-xl lg:text-3xl xl:text-5xl font-bold md:mt-2'>Code-Dynamics</div>
                    <div className='text-xs md:text-lg mt-2 md:mt-5'>This repo is for open source contribution, so that <br className='hidden md:block'/> people can provide there optimize DSA code here.</div>
                </div>
                <Link href="/">
                    <a>
                        <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651839375/Vector_1_f73a21a3c7.svg?updated_at=2022-05-06T12:16:17.332Z" alt="logo" width={100} height={60}/>
                    </a>
                </Link>
            </div>
            <div className='flex justify-between mt-8 md:mt-16'>
                <div className='flex'>
                    {/* details cards */}
                    {/* <div className='w-44 text-white p-5 bg-yellow-400 flex text-2xl'> */}
                    <div className='w-20 md:w-44 text-white md:p-5 hidden sm:flex text-sm  md:text-2xl'>
                        <i className="fa-solid fa-user-group"></i>
                        <div className='flex flex-col items-start ml-2 '>
                            <div className='text-sm md:text-2xl'>{githubData.forks}+</div>
                            <div className='text-xs md:text-sm mt-3'>Contributers</div>
                        </div>
                    </div>
                    {/* contributor card after sm break point */}
                    <div className='w-20 text-white flex flex-col sm:hidden text-sm'>
                        <div className='flex'>
                            <i className="fa-solid fa-user-group"></i>
                            <div className='text-sm ml-2'>{githubData.forks}+</div>
                        </div>
                        <div className='text-xs mt-3'>Contributers</div>
                    </div>
                    {/* <div className='w-44 text-white p-5 bg-blue-400 flex text-2xl'> */}
                    <div className='w-20 md:w-44 text-white md:p-5 flex text-sm md:text-2xl'>
                        <i className="fa-regular fa-circle-dot"></i>
                        <div className='flex flex-col items-start ml-2 '>
                            <div className='text-sm md:text-2xl'>{githubData.open_issues}</div>
                            <div className='text-xs md:text-sm mt-3'>Issues</div>
                        </div>
                    </div>
                    {/* <div className='w-44 text-white p-5 bg-green-400 flex text-2xl'> */}
                    <div className='w-20 md:w-44 text-white md:p-5 flex text-sm md:text-2xl'>
                        <i className="fa-regular fa-star"></i>
                        <div className='flex flex-col items-start ml-2 '>
                            <div className='text-sm md:text-2xl'>{githubData.stargazers_count}</div>
                            <div className='text-xs md:text-sm mt-3'>Star</div>
                        </div>
                    </div>
                    {/* <div className='w-44 text-white p-5 bg-teal-400 flex text-2xl'> */}
                    <div className='w-20 md:w-44 text-white md:p-5 flex text-sm md:text-2xl'>
                        <i className="fa-solid fa-code-fork"></i>
                        <div className='flex flex-col items-start ml-2 '>
                            <div className='text-sm md:text-2xl'>{githubData.forks}</div>
                            <div className='text-xs md:text-sm mt-3'>Forks</div>
                        </div>
                    </div>
                </div>
                <div className='text-2xl md:text-5xl text-white hidden sm:flex justify-end items-center'>
                    <Link href="https://github.com/Next-Gen-UI/Code-Dynamics">
                        <a target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
        <style jsx>{`
            .about-mainframe{
                background-color: #1E1E1E;
            }
            .neuro{
                box-shadow: 9px 9px 16px rgba(225, 225, 225, 0.1), -9px -9px 16px rgba(225, 225, 225, 0.4);
            }
            .githubCard{
                box-shadow:  7px 7px 14px #14131e,
                    -7px -7px 28px #514f7c;
            }
      `}</style>
    </>
  )
}
export const getStaticProps = async () => {
    const res =  await fetch("https://api.github.com/orgs/Next-Gen-UI/repos")
    const githubData =  await res.json();
  
    return {
        props: {
            githubData: githubData[2],
        },
        revalidate: 1,
    };
};

export default Aboutus