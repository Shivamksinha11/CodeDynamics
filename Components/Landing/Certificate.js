import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Certificate = () => {
  return (
    <>
      <div className="flex flex-col-reverse xl:flex-row py-20">
        
        <div className="2xl:w-1/2 flex justify-center items-center mt-10 xl:mt-0">
          {/* certificate card */}
          <div className='hidden sm:block'>
            <div>
              <Link href="/hackerrank">
                <a>
                  <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651157359/top_6ec92f47f2.svg?updated_at=2022-04-28T14:49:21.312Z" alt="certificate" width="415" height="230" className='absolute z-30' />
                </a>
              </Link>
            </div>
            <div className="ml-10 md:ml-28 -mt-48">
              <Link href="/hackerrank">
                <a>
                  <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651157358/2nd_727c786e49.svg?updated_at=2022-04-28T14:49:20.494Z" alt="certificate" width="415" height="230" className='absolute z-20' />
                </a>
              </Link>
            </div>
            <div className="ml-20 md:ml-40 -mt-48">
              <Link href="/hackerrank">
                <a>
                  <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651157358/3rd_a1c768251b.svg?updated_at=2022-04-28T14:49:20.478Z" alt="certificate" width="415" height="230" className='absolute z-10' />
                </a>
              </Link>
            </div>
            <div className="ml-32 md:ml-52 -mt-48">
              <Link href="/hackerrank">
                <a>
                  <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1651157358/4th_1be3bdb162.svg?updated_at=2022-04-28T14:49:20.449Z" alt="certificate" width="415" height="230" className='absolute z-0' />
                </a>
              </Link>
            </div>
          </div>
          <div className='sm:hidden'>
              <Link href="/hackerrank">
                <a>
                  <Image src="https://res.cloudinary.com/nextgenui/image/upload/v1652192982/certificate_cluster_8f49114dd9.png?updated_at=2022-05-10T14:29:43.345Z" alt="certificate" width="605" height="373" />
                </a>
              </Link>
            </div>
        </div>

        <div className="2xl:w-1/2 flex justify-center items-center font-roboto xl:ml-10">
          <div className='text-gray-400 text-center xl:text-left'>
            <div className="uppercase text-base">on various plateform</div>
            <div className="text-5xl text-white font-semibold my-3">Get Certificate</div>
            <div className="text-xl max-w-sm">After attempting a test, go through the solutions and get a better understanding of the problems and improve your skils.</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Certificate