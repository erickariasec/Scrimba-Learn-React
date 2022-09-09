import phoneIcon from "../assets/phone-icon.png"
import mailIcon from "../assets/mail-icon.png"

function Contact(props) {
    /**
        * !Challenge: Fix the code below to use the `props` object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{props.phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{props.mail}</p>
            </div>
        </div>
    );
}

export default Contact;