import "./navbar.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { PiTwitterLogoBold } from "react-icons/pi";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <span>Wed Developer</span>
                <div className="social">
                    <a href="#"><FaFacebookSquare /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><TfiYoutube /></a>
                    <a href="#"><PiTwitterLogoBold /></a>
                </div>
            </div>
        </div>

    )

}

export default Navbar