
function Languages({languages}) {
    return (
        <div>
        <h2>Lingue</h2>
        <ul>
        {languages.map((language) => <li key={language}>{language}</li>)}
        </ul>
        </div>
    )
}

export default Languages
