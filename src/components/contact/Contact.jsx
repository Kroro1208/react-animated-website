import React from 'react'
import "./Contact.scss"
import { motion } from "framer-motion"

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    },
}

const Contact = () => {
    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className='text-container' variants={variants}>
                <motion.h1 variants={variants}>Let's Work Together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>yamagata_7580@yahoo.co.jp</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>東京都港区麻布十番7-7-7</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>03-1234-5678</span>
                </motion.div>
            </motion.div>
            <div className='form-container'>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea cols="30" rows="8" placeholder='Message' />
                    <motion.button whileHover={{ background: "gray", color: "white" }}>Submit</motion.button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact
