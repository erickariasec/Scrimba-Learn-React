import phoneIcon from "../assets/phone-icon.png"
import mailIcon from "../assets/mail-icon.png"

/**
   * !Challenge: fix the bug, now that we've destructured the props object
*/

function Contact({img, name, phoneNumber, mail}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{mail}</p>
            </div>
        </div>
    );
}

export default Contact;

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name)