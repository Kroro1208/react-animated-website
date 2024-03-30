import React, { useRef } from 'react'
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React E-Commerce",
        img: "/react.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea error, maiores quidem praesentium quo corporis vero laboriosam aliquam nihil corrupti obcaecati incidunt neque, reiciendis libero labore fugiat sequi quam officia!"
    },
    {
        id: 2,
        title: "Website using Next.js ",
        img: "/app.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea error, maiores quidem praesentium quo corporis vero laboriosam aliquam nihil corrupti obcaecati incidunt neque, reiciendis libero labore fugiat sequi quam officia!"
    },
    {
        id: 3,
        title: "Shopify",
        img: "/Shopify.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea error, maiores quidem praesentium quo corporis vero laboriosam aliquam nihil corrupti obcaecati incidunt neque, reiciendis libero labore fugiat sequi quam officia!"
    },
    {
        id: 4,
        title: "Ordering System using Next.js, TypeScript",
        img: "/app2.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea error, maiores quidem praesentium quo corporis vero laboriosam aliquam "
    },

];

const Single = ({ item }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section>
            <div className='container'>
                <div className='wrapper'>
                    <div className="image-container" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className='text-container' style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <motion.button whileHover={{ background: "gray", color: "black" }}>See Project</motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"], });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className='progress-bar'></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio
