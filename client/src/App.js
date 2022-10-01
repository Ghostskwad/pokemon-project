import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("/hello").then(resp => setCount(resp.data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
