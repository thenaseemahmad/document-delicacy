import { useEffect, useState } from "react";
import FileUploadComp from "./FileUploadComp";
import { getTrainingDocs } from "../../backendcomp/BackendComp";

export default function DocumentUploader({ collDetail, modelDetail, handleCloseButtonOnUploadModal }) {
    const [docsForThisCollection, setDocsForThisCollection] = useState([]);
    const [waitUntilExistingDocsAvailable, setWaitUntilExistingDocsAvailable] = useState(<div class="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
        <span class="visually-hidden">Loading...</span>
    </div>)
    useEffect(() => {
        //Add the spinner initially so that user should wait until all the existing docs for this collection shown to the user

        //make a query on document database to get all the docs for this collection
        //this query will fetch all the existing documents for this collection
        getTrainingDocs(collDetail._id, (response) => {
            if (response.status === 200) {
                setDocsForThisCollection(response.data);
                setWaitUntilExistingDocsAvailable(
                    <>
                        <FileUploadComp collectionDetailToUploadTheFiles={collDetail} returnUploadedFiles={callbackUploadedDocsData} />
                        <hr className="mb-1" />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Upload date</th>
                                    <th scope="col">Size</th>
                                </tr>
                            </thead>
                            <tbody className="fw-lighter">
                                {docsForThisCollection.map((doc, index) => {
                                    return (
                                        <tr className="added-pdf-docs">
                                            <td>{index + 1}</td>
                                            <td className="text-truncate" style={{ maxWidth: "150px" }}>{doc.document_name}</td>
                                            <td>{uploadDateStamp(doc.created_on)}</td>
                                            <td>{doc.document_size}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table></>
                )
            }
            else {
                alert('Unable to perform this operation currently, Please try again later!')
            }
        });
    }, [])

    function callbackUploadedDocsData(uploadedDocsData) {
        setDocsForThisCollection(uploadedDocsData)
    }

    function uploadDateStamp(dateTimeStamp) {
        const uploadDate = new Date(Date.parse(dateTimeStamp));
        return uploadDate.toLocaleDateString('default', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    return (
        <div aria-disabled={true} style={{ width: "600px" }} className="offcanvas offcanvas-end show border" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" aria-modal="true">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">{collDetail.collection_name}</h5>
                <button onClick={handleCloseButtonOnUploadModal} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr className="m-0" />
            <div className="offcanvas-body">
            {waitUntilExistingDocsAvailable}
                {/* <FileUploadComp collectionDetailToUploadTheFiles={collDetail} returnUploadedFiles={callbackUploadedDocsData} />
                <hr className="mb-1" />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr</th>
                            <th scope="col">Name</th>
                            <th scope="col">Upload date</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody className="fw-lighter">
                        {docsForThisCollection.map((doc,index)=>{return(
                            <tr className="added-pdf-docs">
                            <td>{index+1}</td>
                            <td className="text-truncate" style={{ maxWidth: "150px" }}>{doc.document_name}</td>
                            <td>{uploadDateStamp(doc.created_on)}</td>
                            <td>{doc.document_size}</td>
                        </tr>
                        )})}

                    </tbody>
                </table> */}
            </div>
        </div>
    );
}