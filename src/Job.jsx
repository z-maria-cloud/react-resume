
function Job({title, address, contract_type, employer, workplace, job_start, job_end, tasks}) {
    return (
        <>
        <h2>{title}</h2>
        <p>{contract_type}</p>
        <p>Somministratore: {employer}</p>
        <p>Utilizzatore: {workplace}</p>
        <p>{address}</p>
        <p>{job_start} - {job_end}</p>
        <ul>
        {tasks.map((task) => <li key={task}>{task}</li>)}
        </ul>
        </>
    )
}

export default Job
