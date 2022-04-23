import React from 'react'
import "../styles/Loading.css"

function Loading() {
    return (
        <div style={{marginTop:'10rem'}}>
            <center>
                <img className="loading_image" src={`${process.env.PUBLIC_URL + '../assests/1.jpg'}`} alt="Loading" />
            </center>
        </div>
    )
}

export default Loading;