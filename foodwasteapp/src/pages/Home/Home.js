import './Home.css'
import { Button } from "react-bootstrap"

export default function Home() {
  return (
    <div className='home'>
        <p className="paragraph">
        </p> 

        <form className="form">
          <p>Sign Up here!</p>
          <Button className="button" href="/Signup">Sign up</Button>
          <p></p>
          <p></p>
          <p>Or, if you already have an account, you can login here.</p>
          <Button className="button" href="/Login">Login</Button>
        </form>
    </div>
  )
}
