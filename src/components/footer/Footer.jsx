import React from 'react';
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiOutlineCoffee } from 'react-icons/ai';
import './footer.css'

const Footer = () => {
    return ( 
      <footer >
        <a href = "#" className = 'footer__logo' > < AiOutlineCoffee / > Business </a>

        {
            /* <div className='permalinks'>
                        <a ref="#">Home </a>
                       <a ref="#about">About</a>
                        <a ref="#portfolio">Portfolio </a>
                        <a ref="#contact">Contact</a>

                    </div> */
        }

        <div className = 'footer__socials' >
        <a href = "#" > < AiFillLinkedin/> </a> 
        <a href = "#" > < AiFillFacebook/> </a> 
        <a href = "#" > < AiFillGithub /> </a>

        </div> 

        <div className = "footer__copyright" >
        <small > Create by Jorge Melchor </small>

        </div>


        </footer>
    )
}

export default Footer
