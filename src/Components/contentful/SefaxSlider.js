import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import useAdvert from "./useAdvert";

function SefaxSlider() {

    const [posts,isLoading] = useAdvert();

    return (
        <Carousel class="carousel-item">
            {
                posts.map(post=>(
                    <Carousel.Item>
                    <img
                    src={post.fields.sliderImage.fields.file.url}
                    style={{
                        margin:'auto',
                        width:'100%',
                        height:'500px',
                        overflow:'hidden'
                    }}
                    /> 
                    <Carousel.Caption>
                        <h3 style={{
                            color:'black',
                            fontSize:'30px',
                            fontWeight:'bold'
                        }}>{post.fields.sliderText} </h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default SefaxSlider

