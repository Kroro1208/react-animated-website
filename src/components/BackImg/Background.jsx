import React, { useRef } from 'react'
import "./Background.scss";
import { motion, useScroll, useTransform } from "framer-motion"

const Background = ({ type }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className='background'
            ref={ref}
            style={{
                background: type === "Services"
                    ? "linear-gradient(180deg, rgb(46, 44, 44), rgb(73, 70, 70)"
                    : "linear-gradient(180deg, rgb(46, 44, 44), rgb(101, 90, 90)"
            }}>
            <motion.h1 style={{ y: yText }}>{type === "Services" ? "What we do ?" : "What we did ?"}</motion.h1>
            <motion.div className='mountains'></motion.div>
            <motion.div className='planets'
                style={{ y: yBg, backgroundImage: `url(${type === "Services" ? "/planets.png" : "/sun.png"})` }}
            ></motion.div>
            <motion.div style={{ x: yBg }} className='stars'></motion.div>
        </div>
    )
}

export default Background
