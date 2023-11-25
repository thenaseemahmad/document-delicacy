import "./Header.css";
import Logo from "../logo/Logo";
import comimg from "../assets/companylogo.png"
import CustomButton from "../button/CustomButton";

function Header({handleAboutBtnClick,handleSigninBtnClick}) {
    return (
        <>
            <div className="header-main">
                <div className="logo-area">
                    <Logo
                        imagelocation={comimg}
                        logoheight="30px"
                    />
                </div>
                <div className="buttons-area">
                    <CustomButton onClick={handleAboutBtnClick} className="btn rounded-0" type="button">About</CustomButton>
                    {/* If user is not logged in then show this button */}
                    <CustomButton onClick={handleSigninBtnClick} className="btn rounded-0" type="button">Sign in/Register</CustomButton>
                    {/* Else show this users profile manager */}

                </div>
            </div>
        </>
    );
}

export default Header