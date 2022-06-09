import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
// import {FaGithub} from 'react-icons/fa'
// import {FiDribble} from 'react-icons/fi'


function HeaderSocials() {
    return ( 
        <div className = 'header__socials' >
        <a href = " https://linkedin.com" target = "_blank" rel="noreferrer"> <BsLinkedin / > </a>  
        <a href = " https://github.com" target = "_blank" rel="noreferrer" >
        <BsGithub / > </a> <a href = " https://facebook.com" target = "_blank"
        rel="noreferrer" > <BsFacebook / > </a> 

        </div>
    )
}


export default HeaderSocials