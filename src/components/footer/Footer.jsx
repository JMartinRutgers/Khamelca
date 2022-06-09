import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import { AiOutlineCoffee } from 'react-icons/ai';
import './footer.css'

const Footer = () => {
    return ( 
      <footer >
        <a href = "/#" className = 'footer__logo' > < AiOutlineCoffee / > Business </a>

        {
            /* <div className='permalinks'>
                        <a ref="#">Home </a>
                       <a ref="#about">About</a>
                        <a ref="#portfolio">Portfolio </a>
                        <a ref="#contact">Contact</a>

                    </div> */
        }

        <div className = 'footer__socials' >
        <a href = " https://linkedin.com" target = "_blank" rel="noreferrer"> <BsLinkedin / > </a>  
        <a href = " https://github.com" target = "_blank" rel="noreferrer" >
        <BsGithub / > </a> <a href = " https://facebook.com" target = "_blank"
        rel="noreferrer" > <BsFacebook / > </a> 

        </div>

        <div className = "footer__copyright" >
        <small > Create by Jorge Melchor </small>

        </div>


        </footer>
    )
}

export default Footer
