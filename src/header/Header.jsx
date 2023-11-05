import React, { useState } from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import comimg from "../assets/companylogo.png"
import About from "../about/About";

function OnAboutButtonClick(){

}

function Header() {
    return (
        <div>
            <div className="header-main">
            <div className="logo-area">
                <Logo
                    imagelocation={comimg}
                    logoheight="30px"
                />
            </div>
            <div className="buttons-area">
                <button onClick={OnAboutButtonClick} type="button" class="btn">About</button>
                <button type="button" class="btn">Sign in</button>
            </div>
        </div>
        <hr />
        </div>

    );
}

export {Header}