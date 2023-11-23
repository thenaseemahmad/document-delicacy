import React from "react";

export default function CustomButton(props){
    return (
        <button 
        onClick={props.onPressThisBtn} 
        type={props.type} 
        className={props.classValue}>{props.title}
        </button>
    );
    
}