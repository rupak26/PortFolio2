import React from 'react' ;
import PageHeaderContent from '../../components/pageHeaderContent';
import { MdContactMail } from 'react-icons/md';

import './style.scss' ;

const Contact = () => {
    return (
        <section id="contact" className="contact">
        <PageHeaderContent
            headerText="Contact"
            icon={<MdContactMail size={40} />}
        />
        <h2>Contact Me</h2>
        <p>
            <a href="mailto:rupakbiswas29bd@gmail.com" target="_blank">
                <img src="https://img.icons8.com/ios-filled/40/000000/email.png" alt="Email"/>
            </a>
            <a href="https://www.linkedin.com/in/rupak-biswas-75771b1a2/" target="_blank">
                <img src="https://img.icons8.com/ios-filled/40/0077B5/linkedin.png" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/rupak26" target="_blank">
                <img src="https://img.icons8.com/ios-filled/40/000000/github.png" alt="GitHub"/>
            </a>
            <a href="https://www.facebook.com/rupak.biswas.5220/" target="_blank">
                <img src="https://img.icons8.com/ios-filled/40/1877F2/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/metaphor__1/" target="_blank">
                <img src="https://img.icons8.com/ios-filled/40/E4405F/instagram.png" alt="Instagram"/>
            </a>
        </p>
        </section>
    )
}

export default Contact;