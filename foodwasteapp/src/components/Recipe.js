import React from 'react'
import './Recipe.css'
import { Button } from "react-bootstrap"
import { useFirestore } from '../hooks/useFirestore'

export default function Recipe({title, image, myKey}) {

    const baseUrl = 'https://api.spoonacular.com/recipes/'
    const apiKey = 'apiKey=6375070d85b04e8eae28ab8097147047'
    const { addDocument, response} = useFirestore('recipes')

    const getRecipe = async () => {
        const res = await fetch(`${baseUrl}${myKey}/information?${apiKey}`)
        const data = await res.json();
        console.log(data.sourceUrl)
        console.log(myKey)
        window.location.href = `${data.sourceUrl}`
    }

    const addToFavourite = (e) => {
        addDocument({
            title,
            image,
            myKey
        })
    }
    
return (
    <div className="recipe">
        <h1>{title}</h1>
        <img className="image" src={image} alt=""/>
        <Button onClick={getRecipe} className="recipeButton" variant="outline-success">Get Recipe</Button>
        <Button onClick={addToFavourite} className="recipeButton" variant="outline-success">Add to Favourites</Button>
    </div>
)
}
