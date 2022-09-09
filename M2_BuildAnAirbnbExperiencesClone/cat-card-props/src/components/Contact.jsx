import mrWhiskerson from "../assets/mr-whiskerson.png"
import phoneIcon from "../assets/phone-icon.png"
import mailIcon from "../assets/mail-icon.png"

function Contact() {
    return (
        <div className="contact-card">
            <img src={mrWhiskerson}/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    );
}

export default Contact;