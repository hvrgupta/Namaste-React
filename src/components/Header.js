import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

// export header component 
// named export -- used to export multiple things
export const HeaderComponent = () => {

    // whenever this variable updates (btnState), it re renders the DOM.
    const [btnState,setBtnState] = useState(true);
    
    return (    
        <div className='header'>
        <div className='logo-container'>
            <img className='logo' 
            src={APP_LOGO} alt='app=logo'>
            </img>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="filter-btn" onClick={() => {
                    setBtnState(!btnState);
                }}>{btnState ? "Login":"Logout"}</button>
            </ul>
        </div>
        </div>
    );
}

