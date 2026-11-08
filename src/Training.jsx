
function Training(props) {
    return (
        <div>
        <h3>{props.year}</h3>
        <ul>
        {props.qualifications.map((certificate) => <li key={certificate}>{certificate}</li>)}
        </ul>
        </div>
    )
}

export default Training
