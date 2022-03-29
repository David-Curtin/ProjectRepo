import { useEffect, useState } from "react"
import { Button } from "bootstrap"

export default function Search() {

  const baseUrl = 'https://api.spoonacular.com/recipes/'
  const apiKey = 'apiKey=6375070d85b04e8eae28ab8097147047'
  const exampleTestedRequest = 'https://api.spoonacular.com/recipes/716429/information?apiKey=6375070d85b04e8eae28ab8097147047&includeNutrition=true.'
  const [counter, setCounter] = useState(0);

    useEffect(() => {
      console.log('effect used')
    }, [])

    return (

      <div>
          <form className="search-form">
            <input className="search-bar" type="text"/>
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
      </div>
    )
  }