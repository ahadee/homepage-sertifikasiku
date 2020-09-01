import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import { makeStyles } from '@material-ui/core';
import image1 from '../images/slides/2.jpg'
import image2 from '../images/slides/3.jpg'
import '../component/style.css';


function carousel() {
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className= "sliderimg" />
                <img src={image2} className= "sliderimg" />
                {/* <img src={image3} className= {classes.sliderimg} />
                <img src={image4} className= {classes.sliderimg} /> */}
            </AliceCarousel>
        </div>
    )
}

export default carousel
