
function ResumeTitle({name, surname, job_title}) {
    return (
        <div>
        <h1>{name} {surname}</h1>
        <p className="subtitle color">{job_title}</p>
        </div>
    )
}

export default ResumeTitle
