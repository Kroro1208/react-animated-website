import React, { useRef } from 'react'
import "./Portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
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
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea error, maiores quidem praesentium quo corporis vero laboriosam aliquam nihil corrupti obcaecati incidunt neque, reiciendis libero labore fugiat sequi quam officia!"
    },

];

const Single = ({ item }) => {
    return <section>{item.title}</section>;
}

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"], });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        dumping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className='progress-bar'></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item.title} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio
