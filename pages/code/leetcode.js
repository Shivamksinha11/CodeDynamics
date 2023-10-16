import { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
//components
import Navbar from "../../Components/Navbar";

const ShowCode =  ({index,question,activeLangHandler})=>{
  const router =  useRouter()
  const [open, setOpen] = useState(!index);

  useEffect(() => {
    if(router.query?.quesIndex)
      setOpen((router.query.quesIndex==index)) 
  }, []);

  return(
    <div className="transition-all duration-300 ease-in-out">
      <div className="mx-5 mt-2 flex items-center cursor-pointer truncate" onClick={() => {
        router.push(`/code/leetcode/?quesIndex=${index}&ques=${question.title}`, undefined, { shallow: true })
        setOpen(!open);
      }}>
        <i className={`${open ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"} text-sm`} ></i>{" "}
        <i className={`${open ? "far fa-folder-open" : "fa-solid fa-folder"}  mx-3 text-lg`} ></i>{" "}
        {question.title} 
      </div>
      {open?  
        <div className="mx-14">
          <div
            className="py-1.5 cursor-pointer truncate"
            onClick={() => activeLangHandler(index, "cpp")}
          >
            <i className="fas fa-file-code mr-2"></i> .cpp
          </div>
          <div
            className=" cursor-pointer truncate"
            onClick={() => activeLangHandler(index, "java")}
          >
            <i className="fas fa-file-code mr-2"></i> .java
          </div>
          <div
            className="py-1.5 cursor-pointer truncate"
            onClick={() => activeLangHandler(index, "py")}
          >
            <i className="fas fa-file-code mr-2"></i> .py
          </div>
        </div> : null
      }
    </div>
  )
}

const Code = ({ codeData }) => {
  const router = useRouter();
  // const codeTitle = router.query.code;

  const [activeQuesIndex, setActiveQuesIndex] = useState(0);
  const [activeLang, setActiveLang] = useState({
    cpp: 1,
    java: 0,
    py: 0,
  });
  const allInactive = {
    cpp: 0,
    java: 0,
    py: 0,
  };
  const activeLangHandler = (index, lang) => {
    setActiveLang({
      ...allInactive,
      [lang]: 1,
    });
    setActiveQuesIndex(index);
  };

  const [openbar, setOpenbar] = useState(true);

  useEffect(() => {
    if (router.query?.quesIndex) setActiveQuesIndex(router.query.quesIndex);
  }, []);
  useEffect(() => {
    let sidebar = document.querySelector(".codeSidebar");
    let sidebarBtn = document.querySelector("#sidebarBtn");
    let hidecheck = document.querySelector("#hidecheck");
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
    sidebarBtn.addEventListener("click", () => {
      hidecheck.classList.toggle("hidden");
    });
    sidebarBtn.addEventListener("click", () => {
      hidecheck1.classList.toggle("hidden");
    });
    sidebarBtn.addEventListener("click", () => {
      hidecheck2.classList.toggle("hidden");
    });
    sidebarBtn.addEventListener("click", () => {
      hidecheck3.classList.toggle("hidden");
    });
    sidebarBtn.addEventListener("click", () => {
      hidecheck4.classList.toggle("hidden");
    });
  }, []);
  return (
    <div className="w-full h-screen font-roboto tracking-wide overflow-hidden">
      <Head>
        <title>Code Dynamics - {codeData.title}</title>
        {/* meta tags */}
        <meta name="title" content={` Code Dynamics - ${codeData.title} `} />
        <meta name="description" content={` Code Dynamics - ${codeData.title} `}  />
        <meta name="author" content="Ankit Raj , Ashish Kumar Mishra , Satyajeet Ramnit" />
        <meta name="keywords" content="Code Dynamics , code Dynamics , Code dynamics , CODE , DYNAMICS , CODEDYNAMICS ,  CodeDynamics , codedynamics , code , dynamics , codes, codeDynamics , CodeDynamics , Components , Resume , Ankit Raj , leetcode , hackerrank , love babar , striver , codechief , codeforces , geeksforgeeks , gfg , kiit , india , editor , vscode , cheetsheet , cpp , c++ , c , java , js , javascript , php , kotlin , python , C# , dart , go , ruby , swift , julia , rust scala swift , ts , typescript , statistics , regex , security , algorithm , dsa  "/>
        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content=" https://www.codedynamics.in/code/leetcode/ , https://codedynamics.vercel.app/code/leetcode/ , https://www.codedynamics.in/ " />
        <meta property="og:title" content={` Code Dynamics - ${codeData.title} `} />
        <meta property="og:site_name" content="Code Dynamics , codedynamics" />
        <meta property="og:description" content={` Code Dynamics - ${codeData.title} `}  />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/nextgenui/image/upload/v1651146645/Rectangle_236_3_9dfee666eb.png?updated_at=2022-04-28T11:50:48.266Z"
        />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content=" https://www.codedynamics.in/code/leetcode/ , https://codedynamics.vercel.app/code/leetcode/ , https://www.codedynamics.in/ " />
        <meta property="twitter:title" content={` Code Dynamics - ${codeData.title} `} />
        <meta property="twitter:description" content={` Code Dynamics - ${codeData.title} `}  />
        <meta property="twitter:image" content="https://res.cloudinary.com/nextgenui/image/upload/v1651146645/Rectangle_236_3_9dfee666eb.png?updated_at=2022-04-28T11:50:48.266Z" />
        <meta name="twitter:site" content="https://codedynamics.in" />
        <meta name="twitter:creator" content=" @AnkitRajCode , @Ashishk55842106 , @RamnitSatyajeet " />
      </Head>
      <Navbar />
      <div className="w-full ">
        <div className="codeSidebar text-white z-50 fixed h-full">
          {/* style - title */}
          <div className="h-12 flex items-center mx-5 truncate">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 mx-1.5"></div>
            <div className="w-4 h-4 rounded-full bg-green-600"></div>
            <div id="hidecheck" className="font-semibold ml-4">Problems</div>
          </div>

          {/* menu */}
          <div className="flex items-center font-medium justify-between mx-5 text-xl my-2 mb-5 truncate">
            <div id="sidebarBtn">
              <i className={`${openbar ? "fas fa-bars text-xl" : "fa-solid fa-xmark text-xl"} cursor-pointer`} onClick={() => setOpenbar(!open)}></i>{" "}
            </div>
            <Link href="/codedynamicssheet">
              <a id="hidecheck1">
                <i className="fas fa-folder text-sky-400"></i>
              </a>
            </Link>
            <Link href={codeData.repo}>
              <a id="hidecheck2" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i>
              </a>
            </Link>
            <div id="hidecheck3" className="cursor-pointer">
              <i className="fas fa-search"></i>
            </div>
            <Link href="/cheetsheet">
              <a id="hidecheck4">
                <i className="fab fa-windows"></i>
              </a>
            </Link>
          </div>

          {/* questions list */}
          <div className="overflow-y-scroll h-full pb-48">
            <div className="mx-5 font-semibold cursor-pointer truncate">
              <i className="far fa-folder-open text-lg mr-3"></i>{" "}
              <span>{codeData.title}</span>
            </div>

            {codeData.questions.map((question, index) => {
              return (
                <ShowCode key={index} index={index} question={question} activeLangHandler={activeLangHandler} />
              );
            })}
          </div>
        </div>
        <div className="code-body h-full">
          <div className="flex text-white" style={{ background: "#494949" }}>
            <div
              className="px-8 py-1  cursor-pointer text-center"
              style={{ background: activeLang.cpp && "rgba(0, 0, 0, 0.4)" }}
              onClick={() => activeLangHandler(activeQuesIndex, "cpp")}
            >
              <i className="fas fa-file-code mr-2"></i> .cpp
            </div>
            <div
              className={`px-8 py-1 border-l-2  border-l-gray-500 cursor-pointer text-center`}
              onClick={() => activeLangHandler(activeQuesIndex, "java")}
              style={{ background: activeLang.java && "rgba(0, 0, 0, 0.4)" }}
            >
              <i className="fas fa-file-code mr-2"></i> .java
            </div>
            <div
              className="px-8 py-1 border-x-2 border-x-gray-500  cursor-pointer text-center"
              onClick={() => activeLangHandler(activeQuesIndex, "py")}
              style={{ background: activeLang.py && "rgba(0, 0, 0, 0.4)" }}
            >
              <i className="fas fa-file-code mr-2"></i> .py
            </div>
          </div>
          <div className="w-full overflow-y-scroll" style={{ height: "83vh" }}>
            {activeLang.cpp ? (
              <CopyBlock
                language="cpp"
                text={codeData.questions[activeQuesIndex].cpp}
                theme={dracula}
                codeBlock
                wrapLines={true}
              />
            ) : null}
            {activeLang.java ? (
              <CopyBlock
                language="java"
                text={codeData.questions[activeQuesIndex].java}
                theme={dracula}
                codeBlock
                wrapLines={true}
              />
            ) : null}
            {}
            {activeLang.py ? (
              <CopyBlock
                language="py"
                text={codeData.questions[activeQuesIndex].python}
                theme={dracula}
                codeBlock
                wrapLines={true}
              />
            ) : null}
          </div>
        </div>
      </div>
      {/* Bottom Background */}
      <div className="w-full absolute -bottom-0 left-0 bg-center bg-contain bg-no-repeat -z-10 blur-lg dark:blur-2xl opacity-100 dark:opacity-70  code-page-footer-background"></div>
      <style jsx>
        {`
          .codeSidebar {
            width: 280px;
            background: linear-gradient(180deg, rgba(35, 34, 57, 0.9) 0%, rgba(55, 54, 77, 0) 100%);
            backdrop-filter: blur(43px);
            transition: all 0.5s ease;
          }
          .codeSidebar.close {
            width: 85px;
          }
          .code-body {
            position: relative;
            left: 280px;
            width: calc(100% - 280px);
            transition: all 0.5s ease;
          }
          .codeSidebar.close ~ .code-body {
            left: 85px;
            width: calc(100% - 85px);
          }
          .code-page-footer-background {
            height: 50vh;
            background-image: url("https://i.imgur.com/1dJmOmT.png");
          }
          .codebloks {
            opacity: 0.7;
            background: rgba(23, 22, 45, 0.8) !important;
          }
          .lbplan{
            background-color: rgba(23, 22, 45, 0.8) !important;
            padding: 15px !important;
            border-radius: 0px !important;
            height: 100% !important;
          }
        `}
      </style>
    </div>
  );
};

Code.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://codedynamics.herokuapp.com/api/leetcode?populate=*"
  );
  const json = await res.json();
  return { codeData: json.data.attributes };
};

export default Code;
