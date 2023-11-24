import React from "react";
import "./Logo"

export default function Logo(props){
    const imagestyle = {
        height:props.logoheight
    }
    return (
        <div className="mt-2">
            <img style={imagestyle} src={props.imagelocation} alt="company logo" />
        </div>
    );
}