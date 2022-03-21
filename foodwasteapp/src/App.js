// imports
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Favourites from './pages/Favourites/Favourites'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Search from './pages/Search/Search';

//styles

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Favourites">
        <Favourites />
      </Route>
      <Route path="/Search">
        <Search />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
