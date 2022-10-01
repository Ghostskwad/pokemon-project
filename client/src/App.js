import { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import axios from "axios"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("/hello").then(resp => setCount(resp.data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
