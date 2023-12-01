import React from "react";

export default function Label(labelTitleToApply, classToApply, forValueToApply, iconToApply){
    return(
        <label className={classToApply} for={forValueToApply}>
         {iconToApply}   
        {labelTitleToApply}</label>
    );
}