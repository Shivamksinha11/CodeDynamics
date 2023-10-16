import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
//components
import Navbar from "../../Components/Navbar";
import { CopyBlock, dracula } from "react-code-blocks";


const ShowCode = ({index2,index,item,activeStateHandler})=>{
  const [isShow, setIsShow] = useState(!index2);
  const router = useRouter()
  return(
    <div className="mx-2" key={index2} >
                        <div className="mx-5 mt-2 flex items-center cursor-pointer  " onClick={() => {
          router.push(`/code/hackerrank/?quesIndex=${index}&ques=${question.title}`, undefined, { shallow: true })
          setIsShow(!isShow);
        }}>
                          <i className="fas fa-chevron-down text-sm"></i>{" "}
                          <i className="far fa-folder-open mx-3 text-lg"></i>{" "}
                          {item.code_question}
                        </div>
                        {isShow?<div className="mx-14">
                          <div
                            className="py-1.5 cursor-pointer"
                            onClick={() => {
                              activeStateHandler(index, index2);
                            }}
                          >
                            <i className="fas fa-file-code mr-2"></i> Code{" "}
                          </div>
                          {/* <div className=" cursor-pointer" onClick={javaHandler}><i className="fas fa-file-code mr-2"></i> .java</div>
                                        <div className="py-1.5 cursor-pointer" onClick={pyHandler}><i className="fas fa-file-code mr-2"></i> .py</div> */}
                        </div>:null}
                        
                      </div>
  )
}

const ShowQuesTitle = ({index,question,activeStateHandler}) => {

  const router =  useRouter();
  const [isShow, setIsShow] = useState(!index);

  useEffect(() => {
    if(router.query?.quesType)
      setIsShow(router.query.quesType==index);
  }, []);

  return(
<div >
                  <div className="mx-5 mt-2 flex items-center cursor-pointer" onClick={() => setIsShow(!isShow)}>
                    <i className="fas fa-chevron-down text-sm"></i>{" "}
                    <i className="far fa-folder-open mx-3 text-lg"></i>{" "}
                    {question.hackkerank_course_title}
                  </div>
                  {isShow?question.codes.map((item, index2) => {
                    return (
                      <ShowCode key={index2} index={index} index2={index2} item={item} activeStateHandler={activeStateHandler} />
                    );
                  }):null}
                </div>
  )
}

const Code = ({ codeData }) => {
  console.log(codeData, "Aehehe");
  const router = useRouter();
  const codeTitle = router.query.code;

  const [activeQues, setActiveQues] = useState(0);
  const [activeTitle, setActiveTitle] = useState(0);
  const [cpp, setCpp] = useState(true);
  const [java, setJava] = useState(false);
  const [py, setPy] = useState(false);
  const cppHandler = (event) => {
    event.preventDefault;
    setCpp(true);
    setJava(false);
    setPy(false);
  };
  const javaHandler = (event) => {
    event.preventDefault;
    setCpp(false);
    setJava(true);
    setPy(false);
  };
  const pyHandler = (event) => {
    event.preventDefault;
    setCpp(false);
    setJava(false);
    setPy(true);
  };
  const activeStateHandler = (index, quesIndex) => {
    setActiveTitle(index);
    setActiveQues(quesIndex);
  };

  useEffect(() => {
    if(router.query?.quesType)
    setActiveTitle(router.query?.quesType);
  }, []);
  return (
    <div className="w-full h-screen font-roboto tracking-wide overflow-hidden">
      <Head>
        <title>Code Dynamics - {codeData.title}</title>
        {/* meta tags */}
        <meta name="title" content={` Code Dynamics - ${codeData.title} `} />
        <meta name="description" content="Hackerrank" />
        <meta
          name="author"
          content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit"
        />
        <meta
          name="keywords"
          content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode  "
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content=" https://www.codedynamics.in/resume/ankitraj/ , https://codedynamics.vercel.app/resume/ankitraj/ , https://www.codedynamics.in/ "
        />
        <meta
          property="og:title"
          content={` Code Dynamics - ${codeData.title} `}
        />
        <meta property="og:site_name" content="Code Dynamics" />
        <meta property="og:description" content="Hackerrank" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/nextgenui/image/upload/v1651146645/Rectangle_236_3_9dfee666eb.png?updated_at=2022-04-28T11:50:48.266Z"
        />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content=" https://www.codedynamics.in/resume/ankitraj/ , https://codedynamics.vercel.app/resume/ankitraj/ , https://www.codedynamics.in/ "
        />
        <meta
          property="twitter:title"
          content={` Code Dynamics - ${codeData.title} `}
        />
        <meta property="twitter:description" content="Hackerrank" />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/nextgenui/image/upload/v1651146645/Rectangle_236_3_9dfee666eb.png?updated_at=2022-04-28T11:50:48.266Z"
        />
        <meta name="twitter:site" content="https://codedynamics.in" />
        <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
      </Head>
      <Navbar />
      <div className="w-full ">
        <div className="code-sidebar text-white z-50 fixed h-full">
          {/* style - title */}
          <div className="h-12 flex items-center mx-5">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 mx-1.5"></div>
            <div className="w-4 h-4 rounded-full bg-green-600"></div>
            <div className=" font-semibold ml-4">Problems</div>
          </div>

          {/* menu */}
          <div className="flex items-center font-medium justify-between mx-5 text-xl my-2 mb-5">
            <Link href="/">
              <a>
                <i className="fas fa-folder text-sky-400"></i>
              </a>
            </Link>
            <Link href={"codeData.repo"}>
              <a target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i>
              </a>
            </Link>
            <div className=" cursor-pointer">
              <i className="fas fa-search"></i>
            </div>
            <Link href="/resume">
              <a>
                <i className="fab fa-windows"></i>
              </a>
            </Link>
            <Link href="/">
              <a>
                <i className="fas fa-cog"></i>
              </a>
            </Link>
          </div>

          {/* questions list */}
          <div className="overflow-y-scroll h-full pb-48">
            <div className="mx-5 font-semibold cursor-pointer">
              <i className="far fa-folder-open text-lg mr-3"></i>{" "}
              <span>{codeData.title}</span>
            </div>

            {codeData.hackkerank?.map((question, index) => {
              return (
                <ShowQuesTitle key={index} index={index} question={question} activeStateHandler ={activeStateHandler}/>
              );
            })}
          </div>
        </div>
        <div className="code-body h-full">
          <div className="flex text-white" style={{ background: "#494949" }}>
            <div
              className="px-8 py-1  cursor-pointer"
              style={{ background: "rgba(0, 0, 0, 0.4)" }}
              onClick={cppHandler}
            >
              <i className="fas fa-file-code mr-2"></i> .cpp
            </div>
            {/* <div
              className="px-8 py-1 border-l-2 border-l-gray-500 cursor-pointer"
              onClick={javaHandler}
            >
              <i className="fas fa-file-code mr-2"></i> .java
            </div> */}
            {/* <div
              className="px-8 py-1 border-x-2 border-x-gray-500  cursor-pointer"
              onClick={pyHandler}
            >
              <i className="fas fa-file-code mr-2"></i> .py
            </div> */}
          </div>
          <div className="w-full overflow-y-scroll" style={{ height: "83vh" }}>
            {cpp && (
              <CopyBlock
                language="cpp"
                text={codeData.hackkerank[activeTitle].codes[activeQues].code}
                theme={dracula}
                codeBlock
                wrapLines={true}
              />
            )}
            {java && (
              <CopyBlock
                language="java"
                text={`class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numToIndex = new HashMap<>();
    
        for (int i = 0; i < nums.length; ++i) {
        if (numToIndex.containsKey(target - nums[i]))
            return new int[] {numToIndex.get(target - nums[i]), i};
        numToIndex.put(nums[i], i);
        }
    
        throw new IllegalArgumentException();
    }
}`}
                theme={dracula}
                codeBlock
                wrapLines={true}
              />
            )}
            {}
            {py && (
              <CopyBlock
                language="py"
                text={`${codeData.questions.python}`}
                theme={dracula}
                codeBlock
                wrapLines={true}
              />
            )}
          </div>
        </div>
      </div>
      {/* Bottom Background */}
      <div className="w-full absolute -bottom-0 left-0 bg-center bg-contain bg-no-repeat -z-10 blur-lg dark:blur-2xl opacity-100 dark:opacity-70  code-page-footer-background"></div>
      <style jsx>
        {`
          .code-sidebar {
            width: 260px;
            background: linear-gradient(
              180deg,
              rgba(35, 34, 57, 0.9) 0%,
              rgba(55, 54, 77, 0) 100%
            );
            backdrop-filter: blur(43px);
            transition: all 0.5s ease;
          }
          .code-body {
            position: relative;
            left: 260px;
            width: calc(100% - 260px);
            transition: all 0.5s ease;
          }
          .sidebar.close ~ .code-body {
            left: 78px;
            width: calc(100% - 78px);
          }
          .code-page-footer-background {
            height: 50vh;
            background-image: url("https://i.imgur.com/1dJmOmT.png");
          }
          .codebloks {
            opacity: 0.7;
            background: rgba(23, 22, 45, 0.8) !important;
          }
        `}
      </style>
    </div>
  );
};

Code.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://codedynamics.herokuapp.com/api/hackerranks?populate[0]=hackkerank.codes"
  );
  const json = await res.json();
  return { codeData: json.data[0].attributes };
};

export default Code;
