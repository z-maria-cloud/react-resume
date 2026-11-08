

function ContactInfo({cellphone, address, email}) {
    return (
        <div>
        <h2>Contatti</h2>
        <p>Cellulare: {cellphone}</p>
        <p>E-Mail: {email}</p>
        <p>Indirizzo: {address}</p>
        </div>
    )
}

export default ContactInfo
