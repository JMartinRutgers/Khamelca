import { FaAward, FaUserFriends } from 'react-icons/fa';
import './about.css';
import Alb from '../../assets/Alb.png';
import Tre from '../../assets/Tre.png';
import Ho from '../../assets/Ho.png';
import Cons from '../../assets/Cons.png';

function About() {
    return ( 
        <section id = "about" >
        <div className = "wrapper1" >
        <h1 className = "alber" > K H A M E L C A </h1>     
        </div>    
        <div className = "container about__container" >
        
        <h1 className = "alber2" > Alberto Pena </h1>   

        <h5 > Landscaping and Construction </h5>       
        <div className = "about__me" >

        <img src = { Alb } alt = "Alberto"/>

        <div className = "about__me-img" >
        </div>

        </div> 

        <div className = "about__content" >
        <div className = "about__cards" >

        <article className = "about__card" >

        <img src = { Tre }
        alt = "About_img" / >

        </article>

        <article className = "about__card" >
        <FaAward className = "about__icon"/ >
        <h5 > Landscaping </h5>   
        <small> Profesional Landscaping </small>  
        <div class = "polaroid" >
        
        <img src = { Ho } alt = "About_img" / >
        </div>     
        <div class = "container" >
        
        <p> Garden </p>    
        </div>      
        </article>


        <article className = "about__card" >
        <FaUserFriends className = "about__icon"/ >
        <h5> Construction </h5>     
        <small > Any size project </small>    
        <div className = "polaroid" >
         <img src = { Cons } alt = "About_img"/ >
        </div>    
        <div class = "container" >

        <p> Renovation </p>     
        </div>    
        </article>

        </div>

        <p >
        We offer the best personal service in the area.We are a complete landscaping design and installation 4 season service. </p>  <a href = "#contact" className = 'btn btn-primary'> Let 's talk </a>
        </div>    
        </div>   
        </section>
    )
}
export default About