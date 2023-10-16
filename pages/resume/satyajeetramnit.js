import React from 'react'
import Head from "next/head"
import Link from 'next/link'
import Image from "next/image"
// Components
import Navbar from "../../Components/Navbar"
import LeftSideComponent from "../../Components/Resume/LeftSideComponent"
import ProjectSection from "../../Components/Resume/ProjectSection"
import Certificates from "../../Components/Resume/Certificates"

const satyajeetramnit = ({ resumeData }) => {
    return (
        <>
            <Head>
                <title>Resume | {resumeData.name}</title>
                {/* meta tags */}
                <meta name="title" content={` Resume | ${resumeData.name} `} />
                <meta name="description" content={`${resumeData.name } - Resume : ${resumeData.description}`} />
                <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
                <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa  "/>
                {/* Open Graph / Facebook  */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content=" https://www.codedynamics.in/resume/ankitraj/ , https://codedynamics.vercel.app/resume/ankitraj/ , https://www.codedynamics.in/ " />
                <meta property="og:title" content={` Resume | ${resumeData.name} `} />
                <meta property="og:site_name" content="Code Dynamics" />
                <meta property="og:description" content={resumeData.description} />
                <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651839377/Screenshot_40_e31563b11a.png?updated_at=2022-05-06T12:16:19.618Z" />
                {/* Twitter  */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content=" https://www.codedynamics.in/resume/ankitraj/ , https://codedynamics.vercel.app/resume/ankitraj/ , https://www.codedynamics.in/ " />
                <meta property="twitter:title" content={` Resume | ${resumeData.name} `} />
                <meta property="twitter:description" content={resumeData.description} />
                <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651839377/Screenshot_40_e31563b11a.png?updated_at=2022-05-06T12:16:19.618Z" />
                <meta name="twitter:site" content="https://codedynamics.in" />
                <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
            </Head>
            {/* Navbar */}
            <Navbar />
            <div className="h-full pb-10 font-montserrat">
                {/* Upper Background */}
                <div className="w-full absolute -top-1 left-0 bg-center bg-contain bg-no-repeat -z-10 blur-md dark:blur-2xl opacity-100 dark:opacity-40  resume-page-head-background"></div>
                
                {/* Title */}
                <div className="text-black dark:text-white  text-center py-20 tracking-widest aa">
                    <div className='text-4xl md:text-6xl'>{resumeData.name}</div>
                    <div className="mt-7 text-2xl md:text-6xl">{resumeData.quote}</div>
                </div>

                {/* Social side */}
                <div className='hidden md:block fixed right-10 2xl:right-20 top-72 text-xl'>
                    <div className="flex flex-col justify-center items-center">
                        <Link href={resumeData.linkedin}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full"><i className="fa-brands fa-linkedin-in"></i></a>
                        </Link>
                        <Link href={resumeData.github}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full my-5"><i className="fa-brands fa-github"></i></a>
                        </Link>
                        <Link href={resumeData.website}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full"><i className="fa-solid fa-globe"></i></a>
                        </Link>
                        <Link href={resumeData.instagram}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full my-5"><i className="fa-brands fa-instagram"></i></a>
                        </Link> 
                        <Link href={resumeData.twitter}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full"><i className="fa-brands fa-twitter"></i></a>
                        </Link>
                    </div>
                </div>

                {/* Resume Card */}
                <div className="mx-5 md:mx-28 2xl:mx-48 text-white z-20">
                    {/* Resume Card Header */}
                    <div className="w-full backdrop-blur-none dark:backdrop-blur-2xl bg-linearheadresumelight dark:bg-linearheadresumedark flex flex-col-reverse lg:flex-row resume-card-header rounded-t-xl p-5 md:p-10">
                        <div className="lg:w-3/4 text-center lg:text-left">
                            <div className="text-5xl font-semibold">{resumeData.name}</div>
                            <div className="my-2 text-resumegreen text-xl font-medium">{resumeData.designation}</div>
                            <div className="text-gray-300 text-base text-justify">{resumeData.description}</div>
                        </div>
                        <div className="lg:w-1/4 flex justify-center items-center mb-5 lg:mb-0">
                            <Image src={resumeData.profile_img} alt="logo" width={180} height={180} className='rounded-full'/>
                        </div>
                    </div>

                    <div className="w-full backdrop-blur-2xl bg-linearbodyresumelight dark:bg-linearbodyresumedark flex flex-col lg:flex-row rounded-b-xl p-5 md:p-10">
                        <div className="lg:w-1/2">
                            {/* Eduction Section */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2">EDUCATION</div>
                            <LeftSideComponent data={resumeData.education} />
                           
                            {/* Work Exp Section */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2 mt-10">WORK EXPERIENCE</div>
                            <LeftSideComponent data={resumeData.work_details} />

                            {/* Organization Section */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2 mt-10 uppercase">Organization</div>
                            <LeftSideComponent data={resumeData.organisation} />
                        </div>

                        <div className="lg:w-1/2 ">
                            {/* Skills */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2">SKILLS</div>
                            <div className="mt-3 font-medium text-white text-sm flex flex-wrap" >
                                {resumeData.skills.map((skill,index) =>{
                                    return(
                                        <div className="w-fit px-5 py-1 rounded-sm bg-teal-400 mr-2 mt-2" key={index}>{skill.skill_name}</div>
                                    )
                                })}
                            </div>
                            
                            {/* Projects */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2 mt-10 uppercase">Projects</div>
                            <ProjectSection data={resumeData.projects} />
                            
                            {/* Certificates */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2 mt-10 uppercase">Certificates</div>
                            <Certificates data={resumeData.certificates} />
                            
                            {/* Achievements */}
                            <div className="w-fit text-2xl tracking-widest text-resumegreen  border-b-4 border-resumegreen pb-2 mt-10 uppercase">Achievements</div>
                            <Certificates data={resumeData.achievements} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start -mt-20 md:-mt-40 md:ml-16">
                    <Image src="https://i.imgur.com/Q9b75FG.png" alt="Blue Circle" width="300" height="300" className="-z-10" />
                </div>

                {/* Social Footer */}
                <div className='block md:hidden mt-5 text-xl'>
                    <div className="flex justify-center items-center">
                        <Link href={resumeData.twitter}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full"><i className="fa-brands fa-twitter"></i></a>
                        </Link>
                        <Link href={resumeData.instagram}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full mx-5"><i className="fa-brands fa-instagram"></i></a>
                        </Link>
                        <Link href={resumeData.facebook}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full"><i className="fa-brands fa-facebook-f"></i></a>
                        </Link>
                        <Link href={resumeData.linkedin}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full mx-5"><i className="fa-brands fa-linkedin-in"></i></a>
                        </Link>
                        <Link href={resumeData.github}>
                            <a target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex justify-center items-center text-white border-2 border-white hover:bg-white hover:text-sky-600 rounded-full"><i className="fa-brands fa-github"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .resume-page-head-background{
                    height:50vh;
                    background-image:url('https://i.imgur.com/m8wDbtr.png');
                }
            `}</style>
        </>
    )
}

export const getStaticProps = async (context) => {
    const { locale } = context;

    const res = await fetch("https://codedynamics.herokuapp.com/api/resume-satyajeets?populate[0]=education.details,work_details.details,organisation.details,skills,projects.project_details,certificates,achievements");
    const parsedData = await res.json();

    return {
        props: {
            resumeData: parsedData.data[0].attributes,
        },
        revalidate: 1,
    };
};

export default satyajeetramnit



