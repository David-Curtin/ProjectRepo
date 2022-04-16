import { Button } from "react-bootstrap"
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Home() {
  const { user } = useAuthContext()
  console.log(user.displayName)

  return (
    <div>
        <h1>Home Page</h1>
        <h2>Hello, {user.displayName} </h2>
        <Button href="/Favourites">Go to Favourites</Button>
    </div>
  )
}
