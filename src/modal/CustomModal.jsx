import React, { useState } from "react";
import sampleInvoice from "../assets/sampleInvoice.jpg";

export default function CustomModal({ handleCloseBtn, handleCreateButton }) {
    const [sampleImageHeight, setSampleImageHeight] = useState();
    function handleZoomin() {
        var currentHeight = sampleImageHeight - 10;
        setSampleImageHeight(currentHeight);
    }
    function handleZoomout() {
        setSampleImageHeight(sampleImageHeight - 10)
    }
    return (
        <div className="modal fade show" id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" style={{ display: "block" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-4" id="exampleModalXlLabel">Extract data from Invoices</h1>
                        <button onClick={handleCloseBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body container-fluid">
                        {/* Detail of the model that user wants to create */}
                        <div className="row text-center">
                            <div className="col">
                                <p>Easily build, train and publish your own custom model to extract information such as text, table, number, handwritten text, checkbox, and more. Custom models are trained with your own data, so they're tailored to your documents. Check out our learn module to get started with building a custom document processing model.</p>
                            </div>
                        </div>
                        {/* Sample invoice pane */}
                        <div className="row">
                            <div className="col-8 bg-light rounded-4">
                                <div className="row">
                                    <div className="col text-center">
                                        {/* Zoomin and zoomout buttons here */}
                                        <div className="btn-group mt-3">
                                            <button onClick={handleZoomin} type="button" className="btn btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"></path>
                                                    <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"></path>
                                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"></path>
                                                </svg>
                                                <span class="visually-hidden">Button</span>
                                            </button>
                                            <button onClick={handleZoomout} type="button" className="btn btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-zoom-out" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                                    <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                                                    <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                                                </svg>
                                                <span className="visually-hidden">Button</span>
                                            </button>
                                        </div>
                                        <hr />
                                    </div>
                                </div>                                
                                <div className="row justify-content-start">
                                    <div className="col position-relative">                                        
                                        <img src={sampleInvoice} style={{ transform: "scale(.95)" }} className="img-fluid overflow-auto mx-2 top-0 start-0" alt="sample-invoice" />
                                    </div>
                                </div>



                            </div>
                            <div className="col-4 bg-light rounded-4">
                                <div className="row">
                                    <div className="col"></div>
                                    <p>This is a</p>
                                </div>

                            </div>

                        </div>

                        {/* Create model buttons on button right corner */}
                        <div className="row">
                            <div className="col">
                                <button onClick={handleCreateButton} className="btn btn-primary my-2">Create Model</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}