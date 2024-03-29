import React from 'react'
import { CgScrollV } from "react-icons/cg";
import "./hero.scss"


const Hero = () => {
    return (
        <div className='hero'>
            <div className="text-container">
                <h1>NAOYA YAMAGATA</h1>
                <h2>Web Developer</h2>
                <div>
                    <button>開発実績</button>
                    <button>お問い合わせ</button>
                </div>
                <CgScrollV />
            </div>
            <div className='image-container'>
                <img src="/sns.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
