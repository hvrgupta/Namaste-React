import { useContext, useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

// export header component 
// named export -- used to export multiple things
export const HeaderComponent = () => {

    // whenever this variable updates (btnState), it re renders the DOM.
    const [btnState,setBtnState] = useState(true);

    const {loggedInUser} = useContext(UserContext);

    // if no dependency array => useEffect is called on every render.
    // if dependency array is [] => useEffect is called on initial render (just once).
    // is something (dependency) is provided in dependency array [] => it is called when the dependency changes.
    
    useEffect(() => {
        console.log("Header.js -- useEffect");
    },[]);
    
    return (    
            <div className="flex justify-between">
                <div className='shadow-lg'>
                    <div className='w-20'>
                        <img className='logo' 
                        src={APP_LOGO} alt='app=logo'>
                        </img>
                    </div>
                </div>
                <div className="flex items-center w-xl">
                    <ul className="flex items-center justify-between p-4 m-4 w-full">
                        <li>
                            {
                            /* to route to other pages without reloading the page 
                            a tag href reloads the page Link component doesn't.
                            */
                            }
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>Contact us</li>
                        <li>
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <button className="filter-btn" onClick={() => {
                            setBtnState(!btnState);
                        }}>{btnState ? "Login":"Logout"}</button>
                        <li className="font-bold">{loggedInUser}</li>
                    </ul>
                </div>
            </div>
    );
}

