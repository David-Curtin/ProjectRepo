// imports
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Secondpage from './pages/Secondpage';

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
      <Route path="/Secondpage">
        <Secondpage />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
