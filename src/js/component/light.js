import React from "react";

const Light = (props) => {
    return (
        <>
        <div className={'red ${props.style}'}></div>
        <div className={'yellow ${props.style}'}></div>
        <div className={'green ${props.style}'}></div>
        </>
    )
}

export default Light