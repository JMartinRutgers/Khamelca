import React from 'react'
import "./portfolio.css"
import Foto from './Foto';

function Portfolio() {
    return (

        <
        section id = 'portfolio' >
        <
        h1 > Landscaping design and Construction < /h1>  <
        h2 > Portfolio < /h2>    <
        div className = "porfolio" >

        <
        center >
        <
        div style = {
            {
                width: '70%',
                height: 400

            }
        } >
        <
        Foto / >
        <
        /div>

        <
        /center>  

        <
        /div>    <
        /section>
    )
}



export default Portfolio;