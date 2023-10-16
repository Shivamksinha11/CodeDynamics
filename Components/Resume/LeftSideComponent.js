const LeftSideComponent = ({ data }) => {
    return (
        <div>
            {data.map((education,index) => {
                return(
                    <div className="mt-4 mb-6 text-sm tracking-wide" key={index}>
                        <a href={education.url} target="_blank" rel="noopener noreferrer" className="font-medium text-lg">{education.name}</a>
                        <div className="text-gray-300 font-light my-1 text-lg">{education.role}</div>
                        <div className="my-1 italic">
                            <span className="text-resumegreen">{education.date}</span>
                            <span className="text-gray-300 float-right sm:mr-32">{education.location}</span>
                        </div>
                        <div className="text-resumegreen font-light">Details</div>
                        { education.details.map((detail,index) =>{
                            return(
                            <li className="my-1.5 xl:mr-28 ml-4" key={index}>{detail.details}</li>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

export default LeftSideComponent
