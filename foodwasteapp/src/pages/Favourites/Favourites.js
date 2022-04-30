import { useCollection } from "../../hooks/useCollection"
import Recipe from "../../components/Recipe"


export default function Favourites() {
  const { documents, error} = useCollection('recipes')
  console.log(documents)
    return (
      <div>
          <h1>Favourites</h1>
          <h2>Favourite Recipes will go here</h2>
          <div>
            {documents.map((documents) => (
              <Recipe 
              uid={documents.uid}
              myKey={documents.id}
              title={documents.title}
              image={documents.image}
              />
            ))}
          </div>
      </div>
    )
  }