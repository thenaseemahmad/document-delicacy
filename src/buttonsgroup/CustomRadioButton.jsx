import React from "react";

export default function CustomRadioButton(radioButtonClickHandles,radioBtnId, ...props){
    return(
        <input onClick={radioButtonClickHandles} id={radioBtnId} {...props}/>
    )

}