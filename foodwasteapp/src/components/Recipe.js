import React from 'react'
import './Recipe.css'

export default function Recipe({title, image}) {
return (
    <div className="recipe">
        <h1>{title}</h1>
        <img src={image} alt=""/>
    </div>
)
}
