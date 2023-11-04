import React from "react";
import "./Logo"

function Logo(props){
    const imagestyle = {
        height:props.logoheight
    }
    return (
        <img style={imagestyle} src={props.imagelocation} alt="company logo" />
    );
}

export default Logo