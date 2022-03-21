// imports
import { Link } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'

//styles
import './Navbar.css'

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <div className="navbar">
        <nav>
        <Link to="/" className="home"><h1>Home</h1></Link>
        <Link to="/Favourites" className="home"><h1>Favourites</h1></Link>
        <Link to="/Search" className="home"><h1>Search</h1></Link>
        <Link to="/Login" className="login"><h1>Login</h1></Link>
        <button className="btn" onClick={logout}>Logout</button>
        <Link to="/SignUp"> <h1>Sign Up</h1></Link>
        </nav>
    </div>
  )
}
