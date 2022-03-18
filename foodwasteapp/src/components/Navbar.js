// imports
import { Link } from "react-router-dom"

//styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
        <Link to="/" className="home">
            <h1>Home</h1>
        </Link>
        <Link to="/Favourites" className="fav">
            <h1>Favourites</h1>
        </Link>
        <Link to="/Search">
            <h1>Search</h1>
        </Link>
        </nav>
    </div>
  )
}
