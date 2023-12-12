import React, { useState } from "react";

export default function EntityAddDropdown({ returnNewEntityName }) {
    const [entity, setEntity] = useState('');
    function handleAddNewEntityButton() {
        returnNewEntityName(entity);
    }
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Add an entity
            </button>
            <ul class="dropdown-menu">
                <li>
                    <div class="input-group p-1">
                        <input onChange={(e) => { setEntity(e.target.value) }} type="text" class="form-control" placeholder="Entity name" aria-label="Recipient's username" aria-describedby="new-entity-button" />
                        <button onClick={handleAddNewEntityButton} class="btn btn-outline-secondary" type="button" id="new-entity-button">Add</button>
                    </div>
                </li>

            </ul>
        </div>
    );
}