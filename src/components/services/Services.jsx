import React from 'react'
import './services.css'
import Ho from '../../assets/Ho.png';
// import Exa from '../../assets/Exa.png'
// import Alb from '../../assets/Alb.png'



// import Ho2 from '../../assets/Ho2.png'
// import Cons from '../../assets/Cons.png'
// import {BiCheck} from 'react-icons/bi'


const Services = () => {
    return (    
        <section  id = "services" > 
          <h1 className = "alber" > K H A M E L C A </h1>     
            
           <h2>OUR SERVICES </h2>
       <center> 
       <h3>We offert the best prices in the area. 
       Any time of season.
    
       </h3>
       
       </center>
        <div className = "contenido" >
           <article className = "cardleft" >
           <div className = "card-container1 card-01" >
           <div className = "pricing-card1 card-01" >
           <div className = "pricing1" >
           <div className = "price1" >
           <sup > $ </sup>  
           <span > 90 </span>  
           </div>  
           <p> /month</p>
   
           <span className = "type1" > Basic </span>  
           </div>  
           <div className = "card-body1" >
   
           <div className = "top-shape1" > </div>  
           <div className = "card-content1" >
   
           <h5> Weekly lawn Mowing </h5>   
           <h5> Lawn Repair </h5>   
           <h5> Sedding </h5>  
           <h5> Fertilization </h5> 
   
   
           <a href = "#contact" className= "buy-btn1" > Buy Now </a>  
           </div>  
           </div>  
           </div> 
           </div>
           </article>

          <article>
          <div class="pol">
          <img src = { Ho } alt = "About_img" / >
          <div className="services-titulo">
          <h3>Landscaping</h3>
          </div>
          </div>
          </article>

          <article className = "cardright" >
           <div className = "card-container2 card-02" >
           <div className = "pricing-card2 card-02" >
           <div className = "pricing2" >
           <div className = "price2" >
           <sup > $ </sup>  
           <span > 120 </span>  
           </div>  
           <p> /month</p>
   
           <span className = "type2" > Premium </span>  
           </div>  
           <div className = "card-body2" >
   
           <div className = "top-shape2" > </div>  
           <div className = "card-content2" >
   
           <h5> Weekly lawn Mowing </h5>   
           <h5> Lawn Repair </h5>   
           <h5> Sedding </h5>  
           <h5> Fertilization </h5> 
   
   
           <a href = "#contact" className= "buy-btn2" > Buy Now </a>  
           </div>  
           </div>  
           </div> 
           </div>
           </article>
          </div>
        </section>
    )
}


export default Services