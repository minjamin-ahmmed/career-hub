

const DisplayJob = ( {job} ) => {
    const {logo, job_title, salary, location, job_type, remote_or_onsite, company_name} = job
    return (
        <div>
            <img src={logo} alt="" />
            <h1> {job_title} </h1>
            <p> {company_name} </p>

            <div className="flex items-center gap-5">
                <p className="border border-purple-600 py-1 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold"> {remote_or_onsite} </p>
                <p className="border border-purple-600 py-1 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold"> {job_type} </p>
            </div>
        </div>
    );
};

export default DisplayJob;