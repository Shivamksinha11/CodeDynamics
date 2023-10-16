import Head from 'next/head'
//components
import Header from '../Components/Landing/Header'
import Section2 from "../Components/Landing/Section2"
import Section3 from '../Components/Landing/Section3'
import Certificate from '../Components/Landing/Certificate'
import NextGenSection from '../Components/Landing/NextGenSection'
import Developers from '../Components/Landing/Developers'
import Footer from '../Components/Footer'

const index = ({ indexData,hackerRankData,leetcodeData }) => {
  return (
    <>
      <Head>
        <title>{indexData.title}</title>
        <meta name="title" content={indexData.title} />
        <meta name="description" content="We focus on leading platforms like leetcode, hackerrank, codechief,geeksforgeeks,... so that you can enhance your skills & be prepared for your next job." />
        <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
        <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content=" https://www.codedynamics.in/" />
        <meta property="og:title" content={indexData.title} />
        <meta property="og:site_name" content={indexData.title} />
        <meta property="og:description" content="We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
        <meta property="og:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651836557/Screenshot_37_f63f11ed80.png?updated_at=2022-05-06T11:29:20.489Z" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.codedynamics.in/" />
        <meta property="twitter:title" content={indexData.title} />
        <meta property="twitter:description" content="We focus on leading platforms so that you can enhance your skills & be prepared for your next job." />
        <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651836557/Screenshot_37_f63f11ed80.png?updated_at=2022-05-06T11:29:20.489Z" />
        <meta name="twitter:site" content="https://codedynamics.in" />
        <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
      </Head>
      {/* Head */}
      <Header headerData={indexData} />
      {/* Body */}
      <div className="text-white mx-5 xl:mx-20 font-roboto">
        <Section2 platformData={indexData} hackerRankData={hackerRankData} leetcodeData={leetcodeData} />
        <Section3 servicesData={indexData} />
        <Certificate />
        <NextGenSection productData={indexData} />
        <Developers DevelopersData={indexData} />
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://codedynamics.herokuapp.com/api/homes?populate[0]=logo,leetcode.questions,hackerrank.questions,services,product,developers");

  const res2 =  await fetch("https://codedynamics.herokuapp.com/api/hackerranks?populate[0]=hackkerank.codes")
  const res3 =  await fetch("https://codedynamics.herokuapp.com/api/leetcode?populate=*")

  const parsedData = await res.json();
  const hackerRankData =  await res2.json();
  const leetcodeData =  await res3.json();


  return {
      props: {
          indexData: parsedData.data[0].attributes,
          hackerRankData: hackerRankData.data[0].attributes,
          leetcodeData: leetcodeData.data.attributes
      },
      revalidate: 1,
  };
};

export default index