import React, { useState } from "react";

export default function NewEntityAddComp({ returnNewEntity, placeholderText }) {
    const [newEntity, setNewEntity] = useState('');
    function handleAddButton() {
        if (newEntity === '') {
            alert("Entity name cant be empty!");
        }
        else{
            returnNewEntity(newEntity);
            //remove the existing value of input text field
            setNewEntity('');
        }
        
    }
    return (
        <>
            <div class="input-group" style={{ width: "300px" }}>
                <input onChange={(e) => { setNewEntity(e.target.value) }} type="text" class="form-control" value={newEntity} placeholder={placeholderText} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={handleAddButton} class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
        </>
    );
}