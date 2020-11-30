import React  from "react";

import useAdvert from "./useAdvert";

export default function AdvertPost(){
    
    const [posts, isLoading] = useAdvert();

   const renderPost= ()=>{
       
        if(isLoading)
        return <p>Loading</p>

        console.log(posts);

        return posts.map((post,index)=>(
            <div>
                <h3>{post.fields.advertTitle} </h3>
                <img
                src={post.fields.advertImage.fields.file.url}
                />
            </div>
        ))
   }

   return(
       <div>
           {
               renderPost()
           }
       </div>
   )

    
}