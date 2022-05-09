import React from 'react'
import './Recipe.css'
import { useFirestore } from '../hooks/useFirestore'


export default function Recipe({title, image, myKey, uid}) {
    const baseUrl = 'https://api.spoonacular.com/recipes/'
    const apiKey = 'apiKey=6375070d85b04e8eae28ab8097147047'
    const { addDocument } = useFirestore('recipes')

    const getRecipe = async () => {
        const res = await fetch(`${baseUrl}${myKey}/information?${apiKey}`)
        const data = await res.json();
        console.log(`${baseUrl}${myKey}/information?${apiKey}`)

        window.location.href = `${data.sourceUrl}`
    }

    const addToFavourite = (e) => {

        addDocument({
            uid,
            title,
            image,
            myKey
        })
    }
    
return (
    <div className="recipe">
        
        <img className="image" src={image} alt=""/>
        <h1>{title}</h1>
        <button onClick={getRecipe} className="btn">Get Recipe</button>
        <button onClick={addToFavourite} className="btn" >Add to Favourites</button>
    </div>
)
}