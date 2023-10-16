import Image from "next/image"

const Section4 = () => {
    return (
        <div className="flex flex-col xl:flex-row text-black dark:text-white my-10 font-roboto">
            <div className="md:w-1/2 flex justify-center flex-col">
                <div className="text-5xl font-semibold">
                    Why This?
                </div>
                <div className="text-md mt-10 max-w-lg">
                    Lorem Ipsum is simply dummy text of the printing and Typesetting Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </div>
            </div>
            <div className="md:w-1/2">
                <div>
                    <div className="-z-10">

                        <div className="w-72 h-96 bg-blue-500 rounded-2xl" style={{clipPath:"polygon(0 0, 100% 26%, 100% 100%, 0 80%)"}}></div>
                    </div>
                    <div className="z-10">
                        <div className=" w-72 h-80 -mt-96 bg-linearbodyresumedark rounded-2xl">
                            <div>
                                <Image src='https://i.imgur.com/xc8iEMI.png' alt="card" width="60" height="60" />
                            </div>
                            <div className="text-base">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4