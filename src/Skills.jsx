
function Skills(props) {
    return (
        <>
        <h2>Competenze</h2>
        <ul>
        {props.skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        </>
    )
}

export default Skills
