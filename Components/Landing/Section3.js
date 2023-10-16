import Image from "next/image"
import Link from "next/link"

const Section3 = ({ servicesData }) => {
    return (
        <div className=" flex flex-wrap items-center justify-around py-28">
            {servicesData.services.map((service, index) => {
                return (
                    <div className="w-64 h-80 md:w-72 md:h-[360px] flex flex-col justify-between p-6 rounded-xl mt-6 text-sm bg-cover bg-no-repeat" style={{backgroundImage:`url(https://res.cloudinary.com/nextgenui/image/upload/v1651157498/Rectangle_216_f71bf49104.svg?updated_at=2022-04-28T14:52:11.719Z)`}} key={index}>
                        <div className="flex items-center justify-between">
                            <div className="text-2xl text-gray-300 font-semibold tracking-wider">{service.title}</div>
                            <div><Image src={service.logo} alt={service.title} width="35" height="35" /></div>
                        </div>
                        <div className="text-gray-300 text-sm md:text-base">{service.description}</div>
                        <Link href={service.serviceOne_url}>
                            <a className="flex items-center text-gray-300">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl mr-5"><i className="fas fa-file-alt"></i></div> 
                                <div>{service.serviceOne}</div>
                            </a>
                        </Link>
                        <Link href={service.serviceTwo_url}>
                            <a className="flex items-center text-gray-300">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-linearbodyresumedark backdrop-blur-2xl mr-5"><i className="fas fa-file-code"></i></div> 
                                <div>{service.serviceTwo}</div>
                            </a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Section3