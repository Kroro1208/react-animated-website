import React from 'react'
import "./Background.scss";

const Background = ({ type }) => {
    return (
        <div className='background' style={{
            background: type === "Services"
                ? "linear-gradient(180deg, rgb(46, 44, 44), rgb(73, 70, 70)"
                : "linear-gradient(180deg, rgb(46, 44, 44), rgb(101, 90, 90)"
        }}>
            <h1>{type === "Services" ? "What we do ?" : "What we did ?"}</h1>
            <div className='mountains'></div>
            <div className='planets'></div>
            <div className='stars'></div>
        </div>
    )
}

export default Background
