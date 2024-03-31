import { motion } from "framer-motion"

const Links = () => {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
    ];

    return (
        <div className="links">
            {
                items.map((item) => (
                    <motion.a href={`#${item}`} key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{item}</motion.a>
                ))
            }
        </div>
    );
}

export default Links