import { useState, useEffect } from "react"
import { Route, Switch } from 'react-router-dom';
import { usePokemon } from "./PokemonContext";
import NavBar from './NavBar';
import Library from './Library';
import Pokedex from './Pokedex';
import PokemonPage from './PokemonPage';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import Signup from "./SignUp";



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  

  

  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path ="/login">
        <LoginForm setUser={setUser}/>
        </Route>
        <Route exact path ="/signup">
        <Signup user={user} setUser={setUser}/>
        </Route>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route exact path="/library">
          <Library user={user}/>
        </Route>
        <Route exact path="/pokedex">
          <Pokedex />
        </Route>
          <Route exact path="/:name">
            <PokemonPage />
          </Route>
      </Switch>
    </div>
  )
}

export default App;

