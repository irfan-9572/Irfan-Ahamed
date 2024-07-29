import React from 'react';
import Styles from "../../Sections/Footer/FooterStyles.module.css"

function Footer() {
  return (
    <section id="footer" className={Styles.container}>
      <p>
        ©2024 Irfan Ahamed Essa <br />
        All rights reserved
      </p>
    </section>
  );
}

export default Footer;
