import React from "react";

export default function ProgressBar({ currentState }) {
    let TwentyFivePercent = "progress-bar bg-dark-subtle";
    let FiftyPercent = "progress-bar bg-dark-subtle";
    let SeventyFivePercent = "progress-bar bg-dark-subtle";
    let HundreedPercent = "progress-bar bg-dark-subtle";
    if (currentState === 25) {
        //Dark first
        TwentyFivePercent = "progress-bar bg-dark";    }
    else if (currentState === 50) {
        //Dark second
        FiftyPercent = "progress-bar bg-dark";
    }
    else if (currentState === 75) {
        //Dark third
        SeventyFivePercent = "progress-bar bg-dark";
    }
    else if (currentState === 100) {
        //Dark fourth
        HundreedPercent = "progress-bar bg-dark";
    }

    return (
        <div className="top-progressbar ps-2 pe-2 pt-0">
            <div className="progress mb-1" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100" style={{ height: "2px" }}>
                <div className="progress-bar bg-success" style={{ width: currentState + "%" }}></div>
            </div>

            <div className="progress-stacked">
                <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "25%" }}>
                    <div className={TwentyFivePercent}>Entities to extract</div>
                </div>
                <div className="vr bg-white"></div>
                <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "25%" }}>
                    <div className={FiftyPercent}>Collections</div>
                </div>
                <div className="vr bg-white"></div>
                <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "25%" }}>
                    <div className={SeventyFivePercent}>Tag Entities</div>
                </div>
                <div className="vr bg-white"></div>
                <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "25%" }}>
                    <div className={HundreedPercent}>Model training</div>
                </div>
            </div>
        </div>
    );
}