const Certificates = ({ data }) => {
    return (
        <div>
            {data.map((certificate,index) => {
                return(
                    <div className="mt-4 mb-6 text-sm tracking-wide" key={index}>
                        <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="font-medium text-lg">{certificate.title} <span className="text-xs text-resumegreen"><i className="fas fa-external-link-alt"></i></span> </a>
                        <li className="ml-4 xl:mr-14 font-light text-resumegreen ">{certificate.details}</li>
                    </div>
                );
            })}
        </div>
    )
}

export default Certificates
