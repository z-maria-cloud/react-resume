
function Training(props) {
    return (
        <>
        <h2>{props.year}</h2>
        <ul>
        {props.qualifications.map((certificate) => <li key={certificate}>{certificate}</li>)}
        </ul>
        </>
    )
}

export default Training
