import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import 'bootstrap/dist/css/bootstrap.min.css';

//styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
    return (
      <form onSubmit={handleSubmit} className={styles['login-form']}>
          <h2>Login</h2>
          <label className="">
            <span>Email</span>
            <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}

            />
            </label>
            <label>
              <span>Password</span>
              <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}

              />
            </label>
          {!isPending && <button type="sumbit" class="btn btn-light">Login</button>}
          {isPending && <button className="btn" disabled>Loading</button>}
          {error && <p>{error}</p>}
      </form>
    )
  }
  