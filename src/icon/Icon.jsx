import React from "react";

export default function Icon({children, ...props}){
    return (
<svg {...props}>{children}</svg>
    );
}