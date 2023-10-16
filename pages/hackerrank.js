import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Link from 'next/link'  
import Head from 'next/head'

const hackerrank = ({hackerRankData}) => {
  return (
      <div className='w-full h-[50vh] bg-cover bg-bottom text-white bg-no-repeat' style={{backgroundImage:"url(https://res.cloudinary.com/nextgenui/image/upload/v1652273710/hackerankheader_ik8zrx.png)"}}>
        <Head>
          <title>Code Dynamics - {hackerRankData.title}</title>
          <meta name="title" content={`Code Dynamics - ${hackerRankData.title}`} />
          <meta name="description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
          <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
          <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , Hackerrank , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa , Hackerrank , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa"/>

          <meta property="og:type" content="website" />
          <meta property="og:url" content=" https://www.codedynamics.in/hackerrank" />
          <meta property="og:title" content={`Code Dynamics - ${hackerRankData.title}`} /> 
          <meta property="og:site_name" content={`Code Dynamics - ${hackerRankData.title}`} />
          <meta property="og:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
          <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652613576/hackerrank_47b1d80a8e.png?updated_at=2022-05-15T11:19:38.897Z" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.codedynamics.in/hackerrank" />
          <meta property="twitter:title" content={`Code Dynamics - ${hackerRankData.title}`} />
          <meta property="twitter:description" content="There&#x27;s only one thing that&#x27;s true no matter what problem solving looks like on a given day - “ Its an integral part of every step of the software development process ”. Every skill takes practice to apply and master.Many developers think that becoming a better problem solver means being able to solve more problems, faster. But thats not true — it means being able to find the best solution to a problem, and then put that solution in place.We aspire to fill that gap, by providing the best resources for the developers to leran from, regardless of the platform they choose.We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
          <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1652613576/hackerrank_47b1d80a8e.png?updated_at=2022-05-15T11:19:38.897Z" />
          <meta name="twitter:site" content="https://codedynamics.in" />
          <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
        </Head>
        <Navbar />

        <div className='mx-2 xl:mx-40 text-2xl text-slate-300 my-10'>
          Hackerrank Skill Certificate
        </div>
        <div className="mx-2 xl:mx-28 2xl:mx-40 bg-hackerrankCardColor px-8 pb-10 rounded-3xl my-10 flex flex-wrap justify-between items-center">
          {hackerRankData.hackkerank.map((topic,index) =>{
            return(
              <Link href={topic.url} key={index}>
                <a className=' transition-all duration-150 ease-in-out w-80 h-44 p-5 bg-hackerrankCardColor hover:-translate-y-2 rounded-2xl neuro flex justify-between mt-10'>
                  <div className='w-1/2 flex flex-col justify-between'>
                    {/* title */}
                    <div className='text-4xl CardTitleColor'>{topic.hackkerank_course_title}</div>
                    {/* button */}
                    <div className='w-10 h-10 flex justify-center items-center rounded-full neuro bg-hackerrankCardColor text-sky-400'>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  {/* Topic Logo */}
                  <div className='w-1/2 flex justify-end'>
                    <Image src={topic.logo} width="120" height="135" />
                  </div>
                </a>
              </Link>
            )
          }).slice(0,3)}
        </div>

        <div className="mx-2 xl:mx-28 2xl:mx-40 bg-hackerrankCardColor px-8 pb-10 rounded-3xl my-10 flex flex-wrap justify-between items-center">
          {hackerRankData.hackkerank.map((topic,index) =>{
            return(
              <Link href={topic.url} key={index}>
                <a className=' transition-all duration-150 ease-in-out w-80 h-44 p-5 bg-hackerrankCardColor hover:-translate-y-2 rounded-2xl neuro flex justify-between mt-10'>
                  <div className='w-1/2 flex flex-col justify-between'>
                    {/* title */}
                    <div className='text-2xl CardTitleColor'>{topic.hackkerank_course_title}</div>
                    {/* button */}
                    <div className='w-10 h-10 flex justify-center items-center rounded-full neuro bg-hackerrankCardColor text-sky-400'>
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                  {/* Topic Logo */}
                  <div className='w-1/2 flex justify-end'>
                    <Image src={topic.logo} width="120" height="135" />
                  </div>
                </a>
              </Link>
            )
          }).slice(3,6)}
        </div>

        <Footer />
        
        <style jsx>{`
          .neuro{
            box-shadow:  7px 7px 14px #14131e,
             -7px -7px 14px #222134;
          }
          .neuro:hover{
            box-shadow: 9px 9px 16px rgba(0, 0, 0, 0.4), -9px -9px 16px rgba(73, 73, 73, 0.4);
          }
          
      `}</style>
    </div>
  )
}

export const getStaticProps = async () => {
  const res =  await fetch("https://codedynamics.herokuapp.com/api/hackerranks?populate[0]=hackkerank.codes")
  const hackerRankData =  await res.json();

  return {
      props: {
          hackerRankData: hackerRankData.data[0].attributes,
      },
      revalidate: 1,
  };
};

export default hackerrank