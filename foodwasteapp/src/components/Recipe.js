import React from 'react'
import './Recipe.css'
import { Button } from "react-bootstrap"

export default function Recipe({title, image}) {
return (
    <div className="recipe">
        <h1>{title}</h1>
        <img src={image} alt=""/>
        <Button variant="light">Get Recipe</Button>
    </div>
)
}
