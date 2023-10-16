import Image from "next/image"
import Link from "next/link"
import { useEffect , useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector("#btn");
        sidebarBtn.addEventListener("click", () => {
          sidebar.classList.toggle("open");
        });
      }, []);
    return (
        <>
            <nav className="w-full z-20 flex flex-row justify-between items-center py-8 px-10 xl:px-24">
                {/* Navbar Brand */}
                <Link href="/">
                    <a>
                        <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651839375/Vector_1_f73a21a3c7.svg?updated_at=2022-05-06T12:16:17.332Z" alt="logo" width={60} height={30}/>
                    </a>
                </Link>
                
                {/* Nav Items */}
                <div className="hidden lg:flex flex-row justify-between text-base font-medium">
                    <Link href="/code/leetcode">
                        <a className="flex items-center text-white hover:text-slate-200">
                            <Image src="https://i.imgur.com/RYQwbo4.png" alt="logo" width={20} height={20}/>
                            <div className="ml-2">Leetcode</div>
                        </a>
                    </Link>

                    <Link href="/hackerrank">
                        <a className="flex items-center ml-16 text-white hover:text-slate-200">
                            <Image src="https://i.imgur.com/WH1V8sb.png" alt="logo" width={20} height={20}/>
                            <div className="ml-2">Hackerrank</div>
                        </a>
                    </Link>

                    <Link href="/cheetsheet">
                        <a className="flex items-center ml-16 text-white hover:text-slate-200">
                            <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1652554045/dev_80e2458acb.svg?updated_at=2022-05-14T18:47:26.951Z" alt="logo" width={20} height={20}/>
                            <div className="ml-2">Cheat Sheet</div>
                        </a>
                    </Link>

                    <Link href="/sdesheet">
                        <a className="flex items-center ml-16 text-white hover:text-slate-200">
                            <i className="fa-solid fa-sheet-plastic"></i>
                            <span className="ml-2">Sheet</span>
                        </a>
                    </Link>

                    <Link href="/aboutus">
                        <a className="flex items-center ml-16 text-white hover:text-slate-200">
                            <i className="fa-solid fa-circle-info"></i>
                            <span className="ml-2">About Us</span>
                        </a>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="hidden xl:block text-slate-300 navbar-search px-4 py-1.5 rounded-lg">
                    <i className="fas fa-search"></i>
                    <input type="search" className=" bg-transparent px-5 focus:outline-none text-white" placeholder="" />
                </div>

                {/* hamburger menu */}
                <div className="lg:hidden flex items-center text-2xl text-white">
                    <i className={`${open ? "fas fa-bars text-xl" : "fa-solid fa-xmark text-xl"}`} id="btn" onClick={() => setOpen(!open)}></i>{" "}
                </div>

                {/* sidebar */}
                <div className="sidebar lg:hidden z-30 p-5 flex flex-col justify-between">

                    <div className="flex flex-col items-center justify-between mt-16">
                        <Link href="/">
                            <a>
                                <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651839375/Vector_1_f73a21a3c7.svg?updated_at=2022-05-06T12:16:17.332Z" alt="logo" width={90} height={45}/>
                            </a>
                        </Link>
                        <div className="text-2xl font-semibold mt-5 text-slate-300">Code Dynamics</div>
                    </div>

                    <div className="h-96">
                        <Link href="/">
                            <a className="flex row items-center px-5 text-lg mt-5 font-semibold">
                                <i className="fas fa-home mr-2"></i> <span className="text-slate-300">Home</span>
                            </a>
                        </Link>
                        <Link href="/code/leetcode">
                            <a className="flex row items-center px-5 text-lg mt-5 font-semibold">
                                <i className="fas fa-home mr-2"></i> <span className="text-slate-300">Leetcode</span>
                            </a>
                        </Link>
                        <Link href="/code/hackerrank">
                            <a className="flex row items-center px-5 text-lg mt-5 font-semibold">
                                <i className="fas fa-home mr-2"></i> <span className="text-slate-300">Hackerrank</span>
                            </a>
                        </Link>
                        <Link href="/code/lovebabbar">
                            <a className="flex row items-center px-5 text-lg mt-5 font-semibold">
                                <i className="fas fa-home mr-2"></i> <span className="text-slate-300">Love Babbar</span>
                            </a>
                        </Link>
                        <Link href="/sdesheet">
                            <a className="flex row items-center px-5 text-lg mt-5 font-semibold">
                                <i className="fas fa-home mr-2"></i> <span className="text-slate-300">Dynamics Sheet</span>
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Link href="/#developer" smooth={true}>
                            <a className="flex flex-row items-center px-5 text-xl mt-3 font-semibold">
                                <i className="fab fa-free-code-camp"></i>
                                <span className="ml-4 text-slate-300">Developers</span>
                            </a>
                        </Link>
                        <Link href="/licence">
                            <a className="flex flex-row items-center px-5 text-xl mt-3 font-semibold">
                                <i className="fas fa-user-shield"></i>
                                <span className="ml-4 text-slate-300">Licence</span>
                            </a>
                        </Link>
                        <Link href="https://github.com/orgs/Next-Gen-UI">
                            <a target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center text-xl mt-6" >
                                <Image src="https://imgur.com/nMsFl2r.png" alt="logo" width={50} height={35} />
                                <span className="ml-2 font-montserrat font-semibold tracking-wide text-slate-300">Community</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                nav{
                    z-index: 10;
                }
                .sidebar {
                    position: fixed;
                    top: 0px;
                    left: -75vw;
                    height: 100%;
                    width: 0px;
                    background: linear-gradient(90deg, rgba(42, 31, 69, 0.6) 0%, rgba(103, 50, 100, 0.6) 50%, rgba(215, 101, 130, 0.6) 100%);
                    backdrop-filter: blur(50px);
                    color: white;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }
                .sidebar.open {
                    left: 0px;
                    width: 75vw;
                    background: linear-gradient(90deg, rgba(42, 31, 69, 0.6) 0%, rgba(103, 50, 100, 0.6) 50%, rgba(215, 101, 130, 0.6) 100%);
                    backdrop-filter: blur(50px);
                }
            `}</style>
        </>
    )
}

export default Navbar
