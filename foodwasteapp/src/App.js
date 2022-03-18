// imports
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Search from './pages/Search';

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
      </BrowserRouter>
    </div>
  );
}

export default App;
