 // imports
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'


export default function NavigationBar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div >
      <Navbar  className="navbar" bg="info" variant="light">
        <Container>
          <Nav className="me-auto">
          {!user && (    
            <>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Signup">Sign Up</Nav.Link>
              
            </>
          )}
          {user && (
            <>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="Search">Search</NavDropdown.Item>
              <NavDropdown.Item href="Favourites">Favourites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
            </>
          )}
          </Nav>
        </Container>
      </Navbar>
    </div> 
  )
}




