import React from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import comimg from "../assets/companylogo.png"

function Header() {
    return (
        <div className="header-main">
            <div className="logo-area">
                <Logo
                    imagelocation={comimg}
                    logoheight="30px"
                />
            </div>
            <div className="buttons-area">
            <button type="button">Support-1</button>
            <button type="button">Support-2</button>
            <button type="button">Support-3</button>
            <button type="button">Support-4</button>

            </div>
        </div>
    );
}

export default Header