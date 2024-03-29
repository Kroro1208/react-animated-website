import "./navbar.scss"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { motion } from "framer-motion"
import SideBar from "../side-bar/Sidebar";


const Navbar = () => {
    return (
        <div className="navbar">
            <SideBar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 1.2 }}
                >Wed Developer</motion.span>
                <motion.div className="social"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 1.2 }}
                >
                    <a href="#"><FaFacebookSquare /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><TfiYoutube /></a>
                    <a href="#"><PiTwitterLogoBold /></a>
                </motion.div>
            </div>
        </div>
    );

}

export default Navbar