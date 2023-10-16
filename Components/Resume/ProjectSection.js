const ProjectSection = ({ data }) => {
    return (
        <div>
            {data.map((project,index) => {
                return(
                <div className="mt-4 mb-6 text-sm tracking-wide" key={index}>
                    <div className="flex flex-row items-center">
                        <a href={project.website_link} target="_blank" rel="noopener noreferrer" className="font-medium text-xl">{project.title}</a>
                        <a href={project.website_link} target="_blank" rel="noopener noreferrer" className="rounded-full h-6 w-6 border-2 mx-2 border-resumegreen flex flex-row justify-center items-center text-xs text-white">
                            <i className="fa-solid fa-globe"></i>
                        </a>
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="rounded-full h-6 w-6 border-2 border-resumegreen flex flex-row justify-center items-center text-xs text-white">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="text-resumegreen my-1 italic">{project.date}</div>
                    <div className="ml-4 2xl:mr-14 font-light">
                    { project.project_details.map((detail,index) =>{
                        return(
                            <li className="my-1.5" key={index}>{detail.details}</li>
                        );
                    })}
                    </div>
                </div>
                );
            })}
        </div>
    )
}

export default ProjectSection