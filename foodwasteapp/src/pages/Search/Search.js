import { useEffect, useState } from "react"
import { Button } from "bootstrap"
import Recipe from "../../components/Recipe"

export default function Search() {

  const baseUrl = 'https://api.spoonacular.com/recipes/'
  const apiKey = 'apiKey=6375070d85b04e8eae28ab8097147047'

  const [recipes, setrecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

    useEffect(() => {
      getRecipes()
    }, [query])

    const getRecipes = async () => {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=6375070d85b04e8eae28ab8097147047&instructionsRequired=true.`)
      const data = await res.json();
      setrecipes(data.results)
    }

    const changeSearch = e => {
      setSearch(e.target.value)
    }

    const getSearch = e => {
      e.preventDefault()
      setQuery(search)
      setSearch('')
    }

    return (

      <div>
          <form onSubmit={getSearch} className="search-form">
            <input onChange={changeSearch} className="search-bar" value={search} type="text"/>
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
          {recipes.map(recipe => (
            <Recipe 
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            />
          ))}
      </div>
    )
  }