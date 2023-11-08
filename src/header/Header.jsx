import "./Header.css";
import Logo from "../logo/Logo";
import comimg from "../assets/companylogo.png"

function Header(props) {
    function handleAboutBtnClick(event) {
        props.aboutBtnCallback(true);
        props.loginBtnCallback(false);
        event.preventDefault();
    }

    function handleSigninBtnClick(event) {
        props.loginBtnCallback(true);
        props.aboutBtnCallback(false);
        event.preventDefault();
    }

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
                    <button onClick={handleAboutBtnClick} type="button" class="btn">About</button>
                    <button onClick={handleSigninBtnClick} type="button" class="btn">Sign in</button>
                </div>
            </div>
            <hr />
        </div>

    );
}

export default Header