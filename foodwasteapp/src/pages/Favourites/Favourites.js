import { useCollection } from "../../hooks/useCollection"
import Recipe from "../../components/Recipe"


export default function Favourites() {
  const { documents } = useCollection('recipes')
    return (
      <div>
          <h1>Favourites</h1>
          <div>
            {documents.map((documents) => (
              <Recipe 
              uid={documents.uid}
              title={documents.title}
              image={documents.image}
              myKey={documents.myKey}
              />
            ))}
          </div>
      </div>
    )
  }