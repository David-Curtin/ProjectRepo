// imports
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { useAuthContext} from './hooks/useAuthContext'

// components and pages
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Favourites from './pages/Favourites/Favourites'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Search from './pages/Search/Search';

// styles

import './App.css';

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        {user && <Redirect to="/Search"/>}
        {!user && <Home />}
      </Route>
      <Route path="/Favourites">
        {user && <Favourites />}
        {!user && <Login />}
      </Route>
      <Route path="/Search">
        {user && <Search />}
        {!user && <Login />}
      </Route>
      <Route path="/Login">
        {user && <Redirect to="/"/>}
        {!user && <Login />}
      </Route>
      <Route path="/SignUp">
      {user && <Redirect to="/"/>}
        {!user && <SignUp />}
      </Route>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
