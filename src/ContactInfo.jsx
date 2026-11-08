

function ContactInfo({cellphone, address, email}) {
    return (
        <>
        <h2>Contatti</h2>
        <p>Cellulare: {cellphone}</p>
        <p>E-Mail: {email}</p>
        <p>Indirizzo: {address}</p>
        </>
    )
}

export default ContactInfo
