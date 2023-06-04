
import sistlogo from "../images/log1.png"
import calcilogo from "../images/logc.png"
import '../App.css'

 function Header(){

    return (
     <>

        <div className="header">
            <div className="sistLogo">
                <img className="sistLogoImage" src={sistlogo} alt="sistLogo"></img>
            </div>
            <div className="calciLogo">
                <img className="calciLogoImage" src={calcilogo} alt="calciLogo"></img>
            </div>
        </div>

     </>
    );

}

export default Header

