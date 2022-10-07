import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"


function Login({ setUser }) {

    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    function handleUsernameChange(e){
        SetUsername(e.target.value)
    }

    function handlePasswordChange(e){
        SetPassword(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
       
    // Logs in user
    axios.post("/login", {
        username,
        password
      })
      .then(res => {
              setUser(res.data)
        })
    history.push(`/`)
    }
   

   

    return(
        <div className="form">
            <h2>Log In</h2>
        <form onSubmit={onSubmit}>
        <input placeholder="Username"type='text' name='username' value={username} onChange={(e) => handleUsernameChange(e)} />
      <div></div>
        <input placeholder="Password" type='password' name='password' value={password} onChange={(e) => handlePasswordChange(e)} />
       
       <div></div>
        <input type='submit' value='Log in!' />
      </form>
      <h3>
        Don't have an account yet? Sign up!
      </h3>
      <Link exact to="/signup">Sign up now!</Link>
         </div>
    )
}


export default Login;