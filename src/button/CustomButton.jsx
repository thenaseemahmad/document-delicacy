import React from "react";

export default function CustomButton({title, ...props}){
    return (
        <button {...props}>{title}</button>
    );
    
}