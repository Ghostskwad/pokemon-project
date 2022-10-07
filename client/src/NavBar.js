import { NavLink, useHistory } from "react-router-dom";
import blueButton from "./images/blue-button.png"
import rygButtons from "./images/ryg-buttons.png"

const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "12px",
    margin: "0 0 0 20px",
    background: "black",
    textDecoration: "none",
    color: "white",
};

function NavBar({ user, setUser }) {

    const history = useHistory()

    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE"
        }).then((res => {
            if (res.ok){
                setUser(null)
                history.push("/")
            }
        }))
    }

    
    return (
        <div className="navbar">
            <NavLink to="/">
                <img id="blue-button" src={blueButton} alt="blue button" />
            </NavLink>
            <img id="colored-buttons" src={rygButtons} alt="ryg buttons" />
            {!user ? <div id="links">
                 <NavLink to="/login"
                    exact
                    style={linkStyles}
                    activeStyle={{background: "darkblue"}}
                >
                    Login
                </NavLink>
                <NavLink to="/signup"
                    exact
                    style={linkStyles}
                    activeStyle={{background: "darkblue"}}
                >
                    Signup
                </NavLink>
                </div>
                :
                <div id="links">
                <button onClick={handleLogoutClick}>Logout</button>
                <NavLink
                    to="/library"
                    exact
                    style={linkStyles}
                    activeStyle={{background: "darkblue",}}
                >
                    Pokemon Library
                </NavLink>
                <NavLink
                    to="/pokedex"
                    exact
                    style={linkStyles}
                    activeStyle={{background: "darkblue",}}
                >
                    My Pokedex
                </NavLink>
            </div>}
        </div>
    )
}

export default NavBar;