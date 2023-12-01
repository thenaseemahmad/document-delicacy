import React from "react";

export default function Card({ cardTitle, cardText, btnOnClick, cardIcon }) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">{cardIcon}{cardTitle}</h6>
                    <p className="card-text">{cardText}</p>
                    <button onClick={btnOnClick} className="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    );

}