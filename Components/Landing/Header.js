import Navbar from '../Navbar'
import Image from "next/image"

const Header = ({ headerData }) => {
  return (
    <div className='w-full h-[50vh] md:h-full bg-cover bg-left md:bg-center md:mb-10' style={{backgroundImage:`url(${headerData.hero_background})`}}>
        <Navbar />
        <div className='w-full flex '>

          <div className='lg:w-1/2 flex flex-col h-full px-5 sm:px-10 lg:px-20'>
            <div className='text-yellow-400 text-xs md:pt-10'> <i className={`${headerData.quote_icon} transform rotate-90`}></i> {headerData.qoute}</div>
            <div className='text-6xl text-white font-semibold my-6'>Code <br/>Dynamics</div>
            <div className="text-gray-400 text-base">Don’t Skip Learning. <br/> Try Fail Learn Repeat better.</div>
            <div className='hidden md:flex w-full justify-center mt-10'>
              <Image src={headerData.hero_ring} alt={headerData.title} width='400' height='275' />
            </div>
          </div>

          <div className='lg:w-1/2 hidden lg:flex '>
            <div className='flex justify-center items-center w-full'>
              <Image src={headerData.hero_globe} alt={headerData.title} width='550' height='550' />
            </div>
          </div>

        </div>

        <div className="hidden lg:flex flex-col justify-center items-center -mt-60">
          <div className='flex justify-center items-center w-full'>
            <Image src={headerData.hero_mainframe} alt={headerData.title} width='800' height='500' className='opacity-90' />
          </div>
          <div>
            <div className='-mt-20 flex'>
              <div className='ml-52'>
                <Image src={headerData.hero_layertwo_left} alt={headerData.title} width='360' height='210' className='opacity-75' />
                <div className='ml-52 -mt-16'>
                  <Image src={headerData.hero_layerthree_left} alt={headerData.title} width='210' height='140' className='opacity-75' />
                </div>
              </div>
              <div className='ml-10'>
                <Image src={headerData.hero_layertwo_right} alt={headerData.title} width='360' height='210' className='opacity-85' />
                <div className='ml-52 -mt-16'>
                  <Image src={headerData.hero_layerthree_right} alt={headerData.title} width='210' height='140' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header