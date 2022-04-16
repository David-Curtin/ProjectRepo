import { useEffect, useState } from "react"
import Recipe from "../../components/Recipe"
import './Search.css'

export default function Search() {

  const baseUrl = 'https://api.spoonacular.com/recipes/'
  const apiKey = 'apiKey=6375070d85b04e8eae28ab8097147047'

  const [recipes, setrecipes] = useState([])
  const [search, setSearch] = useState('')
  const [intolerance, setIntolerance] = useState('')
  const [query, setQuery] = useState('')

    useEffect(() => {
      getRecipes()
    }, [query])

    const getRecipes = async () => {
      const res = await fetch(`${baseUrl}complexSearch?query=${query}&${apiKey}&instructionsRequired=true.`)
      const data = await res.json();
      setrecipes(data.results)
    }

    const changeIngredients = e => {
      setSearch(e.target.value)
    }

    const changeIntolerances = e => {
      setIntolerance(e.target.value)
    }

    const getSearch = e => {
      e.preventDefault()
      setQuery(search + '&intolerances=' + intolerance)
      setSearch('')
      setIntolerance('')
      console.log(query)
    }

    return (

      <div>
          <form onSubmit={getSearch} className="search-form">
            <p>Enter Ingredients (multiple selections must be comma seperated)</p>
            <input onChange={changeIngredients} className="search-bar1" value={search} type="text"/>
            <p></p>
            <p>Enter Intolerances (multiple selections must be comma seperated)</p>
            <input onChange={changeIntolerances} className="search-bar2" value={intolerance} type="text"/>
            <div>
              <button className="btn">Search</button>
            </div>
          </form>
          <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
            myKey={recipe.id}
            title={recipe.title}
            image={recipe.image}
            />
          ))} </div>
      </div>
    )
  }