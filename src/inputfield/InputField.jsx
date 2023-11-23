import React from "react";

export default function InputField(props) {
    return (
        <div className="form-floating" >
            <input 
            onChange={props.againstUserInsertAnyValue} 
            type={props.fieldType} className={props.classToApply} 
            id={props.idToApply} 
            placeholder={props.placeholderToShow} 
            />
            <label for={props.idToApply}
            >{props.labelToApply}</label>
        </div>
    );
}