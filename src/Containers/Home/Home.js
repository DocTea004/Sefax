import React from 'react';
import {Link} from "react-router-dom";
import Banner from "../../Components/Banner/Banner"
import Hero from "../../Components/Hero/Hero"
import Services from "../../Components/Services/Services";
import FeaturdProduct from "../../Components/FeaturedProducts/FeaturedProduct";
import Contact from '../../Components/Contact/Contact';
import About from "../../Components/About/About";


function Home() {
    return (
        <React.Fragment>
           <Hero>
               <Banner
               title="24/7 SOUND & SECURED SECURITY SERVICES LTD"
               subtitle="We provide the best quality services"
               >
                 {
                     /*
                     <Link to="/Contact" className="btn-primary">
                     Hire Us
                 </Link>
                 <Link to="/Cameras" className="banner-btn">
                     Order product
                 </Link>

                 */
                 }
               </Banner>
           </Hero>

           <About   />

           <Services />

           <FeaturdProduct  />

           <Contact />

           
        </React.Fragment>
    )
}

export default Home
