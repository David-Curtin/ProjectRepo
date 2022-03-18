// imports
import { Link } from "react-router-dom"

//styles

export default function Navbar() {
  return (
    <div>
        <nav>
        <Link to="/">
            <h1>Home</h1>
        </Link>
        <Link to="/Secondpage">
            <h1>Second page</h1>
        </Link>
        <Link to="/Favourites">
            <h1>Favourites</h1>
        </Link>
        <Link to="/Search">
            <h1>Search</h1>
        </Link>
        </nav>
    </div>
  )
}
