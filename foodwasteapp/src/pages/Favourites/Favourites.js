import { useCollection } from "../../hooks/useCollection"
import FavouriteRecipe from "../../components/FavouriteRecipe"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Favourites() {
  const { documents } = useCollection('recipes')
  const { user } = useAuthContext()

    return (
      <div>
          <h1>Favourites</h1>
          <div className="recipes">
            {documents.filter(function (document) { 
              return document.uid === user.uid
            }).map((documents) => (
              <FavouriteRecipe 
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