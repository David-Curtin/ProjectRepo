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
        <Link to="/Favourites" className="home">
            <h1>Favourites</h1>
        </Link>
        <Link to="/Search" className="home">
            <h1>Search</h1>
        </Link>
        <Link to="/Login" className="login">
            <h1>Login</h1>
        </Link>
        <Link to="/SignUp">
            <h1>Sign Up</h1>
        </Link>
        </nav>
    </div>
  )
}
