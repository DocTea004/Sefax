import React from "react";
import useSefax from "./useSefax";
import "./Sefax.css";
import SefaxSlider from "./SefaxSlider";



export default function SefaxPost(){

    const [post,isLoading]= useSefax();

    const renderPosts = () =>{

        if(isLoading) return <p>Page Loading</p>

        return post.map((post,index)=>(
            <div className="renderpost_content">
                
                <div  className="Post_image">
                    <h2>{post.fields.productName} </h2>
                    <img
                    className="posted-images"
                    src={post.fields.productImage.fields.file.url}
                    />
                    <p>{post.fields.productDescription} </p>
                </div>

            </div>
        ))
    }

    return(
        <div className="sefax">
        <div className="slider">
        <SefaxSlider   />
        </div>

        <div className="work-gallery">
            <h3>Our Products</h3>
        </div>
            <div className="sefax-renderpost">
                {
                    renderPosts()
                }
            </div>
        </div>
    )
}