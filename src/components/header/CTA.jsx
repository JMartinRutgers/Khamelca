import React from 'react'
import CV from '../../assets/card.png'

const CTA = () => {
    return ( <
        div className = "cta" >
        <
        a href = { CV }
        download className = 'btn' > Business Card < /a>  <
        a href = "#contact"
        className = 'btn btn-primary' > Contact me < /a>  <
        /div>
    )
}

export default CTA