import React from 'react'

export default function Recipe({title, image}) {
return (
    <div>
        <h1>{title}</h1>
        <img src={image} alt=""/>
    </div>
)
}
