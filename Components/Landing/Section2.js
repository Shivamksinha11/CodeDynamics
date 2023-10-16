import Image from 'next/image'
import Link from 'next/link'

const Section2 = ({ platformData ,hackerRankData,leetcodeData}) => {
    return (
        <div>
            <div className="text-3xl md:text-5xl font-semibold text-left sm:text-center xl:text-left">Learn Through the <br className='sm:hidden xl:block' /> Best Platform</div>
            <div className="flex flex-col xl:flex-row justify-between items-center mt-10 ">
                <div className="text-lg xl:text-base text-center xl:text-left">We focus on leading platforms so that you can <br className='hidden xl:block' /> enhance your skills & be prepared for your next job.</div>
                {/* Company Title */}
                <div className="flex my-5 xl:my-0">
                    {platformData.logo.map((logo, index) => {
                        return (
                            <a href={logo.url} target="_blank" rel="noopener noreferrer" className="mx-5" key={index}>
                                <Image src={logo.image} alt={logo.title} width="40px" height="40px" className="rounded-full" />
                            </a>
                        )
                    })}
                </div>
                {/* Search Bar */}
                <div>
                    <div className="text-gray-400 navbar-search px-4 py-1.5 rounded-lg">
                    <i className="fas fa-search"></i>
                    <input type="search" className=" bg-transparent px-5 focus:outline-none text-white"  />
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-10 md:space-y-0 lg:flex-row mt-10">
            {/* LeetCode Card */}
            <div className="lg:w-1/2 md:p-10">
                <div className=" bg-sectionTwoGlass backdrop-blur-2xl h-68 sm:h-96 rounded-2xl flex p-2 md:p-5 shadow-xl" style={{border:"0.5px solid #808080"}}>
                <div className="w-7/12 h-full rounded-l-2xl px-2 md:px-5">
                    <div className=" tracking-wider">Problems</div>
                    <div className="mt-5 overflow-y-scroll h-56 sm:h-72 text-xs md:text-base">
                        {leetcodeData.questions.slice(0,10).map((question, index) => {
                            
                            return (
                                <Link href={{ pathname: '/code/leetcode', query: { quesIndex: index, ques:question.title } }} key={index}><a className="flex items-center font-light mb-4" >
                                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl mr-5">{index+1}</div> 
                                    {question.title}
                                </a></Link>
                                
                            )
                        })}
                    </div>
                </div>
                <Link href={leetcodeData.url}>
                    <a className="w-5/12 h-full rounded-2xl bg-landingcardleetcode flex flex-col text-center items-center p-5 opacity-80">
                        <div>
                            <Image src={platformData.leetcode.image} alt={platformData.leetcode.title} width="180" height="160" />
                        </div> 
                        <div className="text-xl md:text-2xl mt-4">{platformData.leetcode.title}</div>
                        <div className="text-lg md:text-xl my-4">{platformData.leetcode.quote}</div>
                        <div className="text-center hidden md:block text-2xl text-gray-400">
                            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
                                <Image src={platformData.leetcode.logo} alt={platformData.leetcode.title} width="40px" height="40px" className="rounded-full" />
                            </a>
                        </div>
                    </a>
                </Link>
                </div>
            </div>
            {/* Hackerrank card */}
            <div className="lg:w-1/2 md:p-10">
                <div className=" bg-sectionTwoGlass backdrop-blur-2xl h-68 sm:h-96 rounded-2xl flex p-2 md:p-5 shadow-xl" style={{border:"0.5px solid #808080"}}>
                        <a className="w-5/12 h-full rounded-2xl flex flex-col text-center items-center p-5 opacity-80 bg-landingcardhackerrank">
                            <div>
                                <Image src={platformData.hackerrank.image} alt={platformData.leetcode.title} width="180" height="160" />
                            </div>
                            <div className="text-xl md:text-2xl mt-4">{platformData.hackerrank.title}</div>
                            <div className="text-base md:text-lg my-4">{platformData.hackerrank.quote}</div>
                            <div className="text-center hidden md:block text-2xl text-gray-400">
                                <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" >
                                    <Image src={platformData.hackerrank.logo} alt={platformData.hackerrank.title} width="40px" height="40px" className="rounded-full" />
                                </a>
                            </div>
                        </a>
                    <div className="w-7/12 h-full rounded-l-2xl mx-5">
                        <div className=" tracking-wider">Problems</div>
                        <div className="mt-5 overflow-y-scroll h-56 sm:h-72 text-xs md:text-base">
                            {hackerRankData.hackkerank.slice(0,10).map((question, index) => {
                                return (
                                    <Link href={{ pathname: '/code/hackerrank', query: { quesType: index , ques:question.hackkerank_course_title } }} key={index}><a className="flex items-center font-light mb-4" >
                                        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl mr-5">{index+1}</div> 
                                        {question.hackkerank_course_title}
                                    </a></Link>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Section2