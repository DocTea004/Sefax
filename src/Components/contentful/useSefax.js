import {useEffect, useState} from "react";

import {getSefaxPosts} from "./contentful";

const promise = getSefaxPosts();

export default function usePosts(){
    const [posts, setPosts] = useState([])

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        promise.then(sefaxposts=>{
            setPosts(sefaxposts)
            setLoading(false)
        })
    },[])

    return [posts, isLoading]
}