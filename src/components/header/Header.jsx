import React from 'react'
import './header.css'
import CTA from './CTA'
import Me2 from '../../assets/video/Me2.mp4'
import HeaderSocials from './HeaderSocials'
import { useEffect, useRef } from "react"
import { init } from 'ityped'
import { BsFillTelephoneXFill } from 'react-icons/bs';

function Header() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backspeed: 60,
            strings: ["Landscaping", "Residential", "Commercial", "Tree removal", "Construction", "Snow cleanear", "All year seasons"],
        });
    }, []);



    return ( <
        header >

        <
        div className = ".container header__container " >
        <
        div className = "logo" >
        <
        h1 > K H A M E L C A < /h1>    <
        h7 > < BsFillTelephoneXFill / > 862 - 254 - 4738 < /h7>

        <
        /div>     <
        h2 > Our Services: < button className = { textRef } > < /button>   <
        /h2>

        <
        video autoPlay loop muted playsInline >
        <
        source src = { Me2 }
        type = "video/mp4" / >
        <
        /video>  

        <
        div className = "me" >

        <
        /div>      <
        CTA / >
        <
        HeaderSocials / >


        <
        a href = "/#contact"
        className = 'scroll__down' > Scroll Down < /a>


        <
        /div>

        <
        /header>
    )
}

export default Header