import React from "react";
import CustomButton from "../../button/CustomButton";
import Icon from "../../icon/Icon";
import "./LeftPane.css"


export default function LeftPane({leftPanePressedBtnValue}) {
    // const [getClickedBtn, setGetClickedBtn] = useState(null);
    function handleButtonClick(btnName){
        // setGetClickedBtn(btnName);
        leftPanePressedBtnValue(btnName);
    }
    return (
        // up14fl4577
        <div id="leftpane">
            <ul className="nav flex-column justify-content-start">
                <li className="nav-item">
                    <CustomButton onClick={()=>{handleButtonClick("home")}} type="button" className="btn rounded-0">
                        <Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house me-3" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </Icon>
                        Home
                    </CustomButton>
                </li>
                <li className="nav-item">
                    <CustomButton onClick={()=>{handleButtonClick("create")}} type="button" className="btn rounded-0">
                        <Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg me-3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </Icon>
                        Create
                    </CustomButton>
                </li>

                <li className="nav-item">
                    <CustomButton onClick={()=>{handleButtonClick("mymodels")}} type="button" className="btn rounded-0">
                        <Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tags me-3" viewBox="0 0 16 16">
                            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
                        </Icon>
                        My models
                    </CustomButton>

                </li>
                <hr />
            </ul>

            <ul className="nav flex-column justify-content-end h-100">
                <hr />
                <li className="nav-item mb-3">
                    <CustomButton onClick={()=>{handleButtonClick("help")}} type="button" className="btn rounded-0">
                        <Icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-square me-3" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />

                        </Icon>
                        Help
                        </CustomButton>
                </li>
            </ul>
        </div>
    );

}