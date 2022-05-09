import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"

//styles
import styles from './SignUp.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }
    return (
      <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
          <label className="">
            <span>Enter Your Email Address:</span>
            <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}

            />
            </label>
            <label>
              <span>Enter A Password:</span>
              <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}

              />
            </label>
            <label>
              <span>Display Name:</span>
              <input
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}

              />
            </label>
          {!isPending && <button className="btn">Sign Up</button>}
          {isPending && <button className="btn" disabled>Loading</button>}
          { error && <p>{error}</p>}
      </form>
      </div>
    )
  }