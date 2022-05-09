import React from 'react'
import './Recipe.css'
import { Button } from "react-bootstrap"
import { database } from '../firebase/config'



export default function FavouriteRecipe({title, image, myKey, uid}) {
    const baseUrl = 'https://api.spoonacular.com/recipes/'
    const apiKey = 'apiKey=6375070d85b04e8eae28ab8097147047'
    

    const getRecipe = async () => {
        const res = await fetch(`${baseUrl}${myKey}/information?${apiKey}`)
        const data = await res.json();
        console.log(`${baseUrl}${myKey}/information?${apiKey}`)

        window.location.href = `${data.sourceUrl}`
    }

    const removeRecipe = (e) => {

        database.collection("recipes").where("title", "==", title).get()
        .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
});
    }
    
return (
    <div className="recipe">
        <h1>{title}</h1>
        <img className="image" src={image} alt=""/>
        <Button onClick={getRecipe} className="recipeButton" variant="outline-success">Get Recipe</Button>
        <Button onClick={removeRecipe} className="recipeButton" variant="outline-success">Remove From Favourites</Button>
    </div>
)
}