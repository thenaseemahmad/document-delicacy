import React from "react";

export default function CustomButton({children, ...props}){
    return (
        <button {...props}>{children}</button>
    );
    
}