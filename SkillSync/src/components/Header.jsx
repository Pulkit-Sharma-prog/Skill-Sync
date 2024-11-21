import BlueButton from "./BlueButton";
import HollowButton from "./HollowButton";
import Logo from "../assets/logo-blue.svg"



function Header() {

    return(
        <>
            <nav>
                <div className="logo">
                    <img className="navbar-logo" src={Logo} alt="Logo" />
                </div>
            
                <div className="navbar-right">
                    <div className="navbar-links">
                        <ul>
                            <li className="links">Features</li>
                            <li className="links">About</li>
                            <li className="links">Contact</li>
                        </ul>
                    </div>

                    <div className="login-signup-buttons">
                        <HollowButton buttonName="Login"/>
                        <BlueButton buttonName="Get Started"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header