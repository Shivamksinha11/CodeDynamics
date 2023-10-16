import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const loaderContainer =  useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
        container: loaderContainer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData: require('../Json/footer.json')
        })
    })
    return (
    <>
        <div className="loaderContainer rotate-180" ref={loaderContainer} ></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center md:px-20 pb-10 z-20 " style={{backgroundColor:'#5E1F6A'}}>
            <Link href="/">
                <a className='flex items-center'>
                    <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651839375/Vector_1_f73a21a3c7.svg?updated_at=2022-05-06T12:16:17.332Z" alt="logo" width={60} height={30}/>
                    <span className='ml-5 md:hidden text-xl font-semibold text-slate-200'>Code Dynamics</span>
                </a>
            </Link>
            <div className="text-center text-slate-200 text-lg md:text-2xl my-5 md:my-0">
                <div className="font-semibold">Designed & Developed for the community</div>
                <div className="font-light md:mt-1">Copyright © Reserved by Code Dynamics</div>
            </div>
            <div className="flex items-center">
                <Link href="https://nextgenui.in">
                    <a target="_blank" rel="noopener noreferrer" className="mt-2">
                        <Image src="https://imgur.com/nMsFl2r.png" alt="logo" width={40} height={30}/>
                    </a>
                </Link>
                <Link href="https://github.com/Next-Gen-UI/Code-Dynamics">
                    <a target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-200 shadow-inner py-2 px-3 text-2xl ml-10 text-black">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Footer