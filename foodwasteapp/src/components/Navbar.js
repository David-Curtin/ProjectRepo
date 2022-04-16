 // imports
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Navbarre() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div >
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
          {!user && (    
            <>
              <Nav.Link  href="/Login">Login</Nav.Link>
              <Nav.Link href="/Signup">Sign Up</Nav.Link>
            </>
          )}
          {user && (
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Favourites">Favourites</Nav.Link>
              <Nav.Link href="/Search">Search</Nav.Link>
              <li><Button variant="outline-primary" onClick={logout}>Logout</Button>{' '}</li>
            </>
          )}
          </Nav>
        </Container>
      </Navbar>
    </div> 
  )
}




