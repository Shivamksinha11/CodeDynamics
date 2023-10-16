import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Sdesheet = ({sdeData}) => {

  const [questions, setQuestions] = useState();

  const toggleQuestion = index => {
    setQuestions(sdeData.questions.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }
  return (
    <>
      <Head>
        <title>Code Dynamics - {sdeData.title}</title>
        <meta name="title" content={`Code Dynamics - ${sdeData.title}`} />
        <meta name="description" content={`Code Dynamics - ${sdeData.title} : SDE Sheet, list of the most important topics or the most popular questions that are asked in the Software Development Engineer Interviews from famous platforms like leetcode , hackerank, geeksforgeeks.`} />
        <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
        <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content=" https://www.codedynamics.in/codedynamicssheet" />
        <meta property="og:title" content={`Code Dynamics - ${sdeData.title}`} />
        <meta property="og:site_name" content={`Code Dynamics - ${sdeData.title}`} />
        <meta property="og:description" content="SDE Sheet, list of the most important topics or the most popular questions that are asked in the Software Development Engineer Interviews from famous platforms like leetcode , hackerank, geeksforgeeks." />
        <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651836557/Screenshot_37_f63f11ed80.png?updated_at=2022-05-06T11:29:20.489Z" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.codedynamics.in/codedynamicssheet" />
        <meta property="twitter:title" content={`Code Dynamics - ${sdeData.title}`} />
        <meta property="twitter:description" content="SDE Sheet, list of the most important topics or the most popular questions that are asked in the Software Development Engineer Interviews from famous platforms like leetcode , hackerank, geeksforgeeks." />
        <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651836557/Screenshot_37_f63f11ed80.png?updated_at=2022-05-06T11:29:20.489Z" />
        <meta name="twitter:site" content="https://codedynamics.in" />
        <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
      </Head>
      <Navbar />
      <div className='mx-5 sm:mx-20 lg:mx-40 2xl:mx-56 text-xl sm:text-2xl lg:text-5xl text-slate-300 my-10'>Dynamics SDE Sheet</div>
      <div className="faqs mx-5 sm:mx-20 lg:mx-40 2xl:mx-56">
        {sdeData.questions.map((question, index) => (
          <div
            className={"cursor-pointer faq " + (question.open ? 'open' : '')}
            onClick={() => toggleQuestion(index)}
            key={index}
          >
            <div className="faq-question text-md font-semibold  border border-gray-500 p-2 flex justify-between mt-5 rounded-md">
              <div className='text-md text-slate-300 truncate'><span>{index+1}.</span> <span className='ml-2'>{question.title}</span></div>
              <div className='px-3 py-1 bg-teal-300 text-xs rounded-sm text-gray-800 hidden sm:block'><i className="fa-regular fa-circle-dot"></i><span className='ml-1 text-sm'>{question.topic}</span></div>
            </div>

            <div className="faq-answer py-5 -mt-5 px-5 border-x border-b rounded-b-xl border-gray-500 shadow-md shadow-gray-700">
              <div className='text-sm'>
                <span className='font-semibold text-slate-100'>Problem Statement :</span>
                <span className='text-slate-300 mx-1'>{question.problemStatement}</span>
                <a href={question.url} target="_blank" rel="noopener noreferrer" className='text-blue-500'>more...</a>
              </div>
              <div className='flex space-x-3 mt-5 text-gray-800 font-semibold text-sm'>
                <a href={question.url} target="_blank" rel="noopener noreferrer" className={`px-3 py-1 rounded-sm ${question.platform==='Leetcode' ? 'bg-yellow-500' : `${question.platform==='Hackerrank'?'bg-green-400':'bg-teal-600 text-slate-100'}`}`}>{question.platform}</a>
                <div className={`px-3 py-1 rounded-sm ${question.level==='Easy' ? 'bg-gray-500 text-white' : `${question.level==='Medium'?'bg-yellow-500':'bg-red-500 text-slate-100'}`}`}>{question.level}</div>
                <div className='px-3 py-1 bg-teal-300 text-xs rounded-sm text-gray-800 sm:hidden truncate'><i className="fa-regular fa-circle-dot"></i><span className='ml-1 text-sm'>{question.topic}</span></div>
                <Link href={question.solution}>
                  <a className='px-3 py-1 bg-cyan-500 text-slate-100 rounded-sm'>Solution</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://codedynamics.herokuapp.com/api/sdesheets?populate[0]=questions");
  const parsedData = await res.json();
  return {
      props: {
        sdeData: parsedData.data[0].attributes,
      },
      revalidate: 1,
  };
};

export default Sdesheet
