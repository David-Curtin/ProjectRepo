// imports
import { Link } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"

//styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    // <div >
        <nav className={styles.navbar}>
          <ul>
            {!user && (    
              <>
                <li><Link to="/Login" className="login"><h1>Login</h1></Link></li>
                <li><Link to="/SignUp"> <h1>Sign Up</h1></Link></li>
              </>
            )}

            {user && (
              <>
                <li><Link to="/" className="home"><h1>Home</h1></Link></li>
                <li><Link to="/Favourites" className="home"><h1>Favourites</h1></Link></li>
                <li><Link to="/Search" className="home"><h1>Search</h1></Link></li>
                <button className="btn" onClick={logout}>Logout</button>
              </>
            )}
          </ul>
        </nav>
    // </div>
  )
}
