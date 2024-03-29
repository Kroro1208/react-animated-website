import React from 'react'
import { CgScrollV } from "react-icons/cg";
import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 1,
        y: 20,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    },


}

const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div className="text-container"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h1 variants={textVariants}>NAOYA YAMAGATA</motion.h1>
                    <motion.h2 variants={textVariants}>Web Developer</motion.h2>
                    <motion.div className='buttons' variants={textVariants}>
                        <motion.button variants={textVariants}>開発実績</motion.button>
                        <motion.button variants={textVariants}>お問い合わせ</motion.button>
                    </motion.div>
                    <motion.div variants={textVariants} animate="scrollButton">
                        <CgScrollV />
                    </motion.div>
                </motion.div>
            </div>
            <div className='sliding-text-container'>
                Frontend Backend Shopify
            </div>
            <div className='image-container'>
                <img src="/sns.png" alt="" />
            </div>
        </div >
    )
}

export default Hero
