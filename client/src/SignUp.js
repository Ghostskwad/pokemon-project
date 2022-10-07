import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"


function Signup({ user, setUser }) {

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
    axios.post("/signup", {
        username,
        password
      })
      .then(res => {
          setUser(res.data)
          if (user) history.push(`/`)
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
        <input type='submit' value='Signup!' />
      </form>
         </div>
    )
}


export default Signup;