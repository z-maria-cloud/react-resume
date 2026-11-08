
function Skills(props) {
    return (
        <div>
        <h2>Competenze</h2>
        <ul>
        {props.skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        </div>
    )
}

export default Skills
