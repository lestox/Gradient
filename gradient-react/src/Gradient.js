import React from "react";


export default function Gradient(colors) {
    console.log({colors});
    return (
        <div className="card" style={{background: `linear-gradient(${colors})`}}>
            <h1>Le beau gradient !</h1>
        </div>
    )
}