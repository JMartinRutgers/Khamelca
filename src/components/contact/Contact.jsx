import React from 'react'
import './contact.css'
import Land from '../../assets/Land.png';
import { BsWhatsapp, BsMailbox } from 'react-icons/bs'
// import Alb from '../../assets/Alb.png';


const Contact = () => {
    return ( <
        section id = "contact"
        className = "contact"
        style = {
            { backgroundImage: `url(${Land})` } } >
        <
        h1 > Contact Me < /h1> <
        div className = "container contact_container" >
        <
        div className = "contact__options" >
        <
        article className = "contact__option" >
        <
        BsMailbox className = 'contact__option-icon' / >
        <
        h7 > Email < /h7> <
        h7 > Khamelca @mail.com < /h7> <
        a href = "mailto:khamelca@gmail.com"
        target = "_blank" > Send a message < /a> <
        /article>

        <
        article className = "contact__option" >
        <
        BsWhatsapp className = 'contact__option-icon' / >
        <
        h7 > WhatsApp < /h7> <
        h7 > +862 254 4738 < /h7> <
        a href = "https://api.whatsapp.com/send?phone+8622544738"
        target = "_blank" > Send a message < /a> <
        /article>

        <
        article className = "contact__option" >
        <
        BsWhatsapp className = 'contact__option-icon' / >
        <
        h7 > Messenger < /h7> <
        h7 > khamelca < /h7> <
        a href = "https://m.me/khamelca.gonzalez.7"
        target = "_blank" > Send a message < /a> <
        /article>

        <
        /div> { /* END OF CONTACT OPTIONS */ } <
        form action = "" >
        <
        input type = "text"
        name = 'name'
        placeholder = 'Your full name'
        required / >
        <
        input type = "mail"
        name = 'mail'
        placeholder = 'Your email'
        required / >
        <
        textarea name = "message"
        rows = "7"
        placeholder = 'Your message'
        required > < /textarea> <
        button type = 'submit'
        className = 'btn btn-primary' > Send message < /button> <
        /form>

        <
        /div>




        <
        /section>

    )
}

export default Contact