import "./Header.css";
import Logo from "../logo/Logo";
import comimg from "../assets/companylogo.png"
import CustomButton from "../button/CustomButton";

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
                    <CustomButton onPressThisBtn={handleAboutBtnClick} title="About" classValue="btn" type="button"/>
                    <CustomButton onPressThisBtn={handleSigninBtnClick} classValue="btn" title="Sign in/Register" type="button"/>
                </div>
            </div>
            <hr />
        </div>

    );
}

export default Header