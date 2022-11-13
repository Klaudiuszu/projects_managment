import { useState } from "react";
import PostContainer from "./PostContainer";
import "./PostProduct.scss";

// {
//     "title": "string",
//     "price": 0,
//     "description": "string",
//     "categoryId": 0,
//     "images": [
//       "string"
//     ]
//   }


const PostPrducts = () => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [optionSelected, setOptionSelected] = useState("");    
    
    const handleSubmit = (e:any) => {

        e.preventDefault();
        const postElement = {title, price, description, categoryId, optionSelected};
        
        fetch("https://api.escuelajs.co/api/v1/products", {
        method: 'POST',
        body: JSON.stringify(postElement)
    }).then(() => {
        console.log('new element added');
    });    

    console.log(postElement)
}

    return (
        <>   
        <PostContainer 
            setTitle={setTitle}
            setPrice={setPrice}
            setDescription={setDescription}
            setCategoryId={setCategoryId}
            handleSubmit={handleSubmit}
            optionSelected={setOptionSelected}
        />
        </>
    )
}

export default PostPrducts;