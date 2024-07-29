import React from "react";
import Styles from "../../Sections/Contacts/ContactStyles.module.css";
function Contacts() {
  return (
    <section id="contact" className={Styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="FormGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" id='name' placeholder="Name" required/>
        </div>
        <div className="FormGroup">
          <label htmlFor="email" hidden>
            email
          </label>
          <input type="text" email="email" id='email' placeholder="Email" required/>
        </div>
        <div className="FormGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea type="text" message="message" id='message' placeholder="Message" required/>
        </div>
        <input type="submit" className="hover btn" value='Submit'/>
      </form>
    </section>
  );
}

export default Contacts;
