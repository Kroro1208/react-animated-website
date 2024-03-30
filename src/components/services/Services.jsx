import React, { useRef } from 'react'
import "./Services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className='services'
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView && "animate"}
        >
            {/* <div className='text-container'>
                <p>
                    I focus on helping your brand grow
                    <br />and move forward.
                </p>
                <hr />
            </div> */}
            < motion.div className='title-container' variants={variants} >
                <div className='title'>
                    <img src="bimg.jpg" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className='title'>
                    <h1><motion.b whileHover={{ color: "orange" }}>For your</motion.b> Business</h1>
                    <motion.button whileHover={{ background: "gray", color: "black" }}>What We do ?</motion.button>
                </div>
            </motion.div >
            <motion.div className='list-container'>
                <motion.div className='box' whileHover={{ background: "gray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ducimus non eum quaerat ullam blanditiis rerum exercitationem magni. Nostrum atque saepe odit laboriosam ad dolorum ut quibusdam id voluptatibus sunt?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className='box' whileHover={{ background: "gray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ducimus non eum quaerat ullam blanditiis rerum exercitationem magni. Nostrum atque saepe odit laboriosam ad dolorum ut quibusdam id voluptatibus sunt?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className='box' whileHover={{ background: "gray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ducimus non eum quaerat ullam blanditiis rerum exercitationem magni. Nostrum atque saepe odit laboriosam ad dolorum ut quibusdam id voluptatibus sunt?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className='box' whileHover={{ background: "gray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ducimus non eum quaerat ullam blanditiis rerum exercitationem magni. Nostrum atque saepe odit laboriosam ad dolorum ut quibusdam id voluptatibus sunt?
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default Services
