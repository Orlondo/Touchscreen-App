import React from 'react';

const hideExitModel = () => {
    const exitModel = document.querySelector('.exit-model-container');

    exitModel.classList.remove('show-exit-model');
    exitModel.classList.remove('fadeIn');
}

const exitApp = (e) => {
    window.close();
}

const ExitModal = () => {
    return (
        <div class="exit-model-container" key={"close-modal"}>
            <div class="close-input">
                <h1>Are you sure you want to close the kiosk?</h1>
                <button class="yes" onClick={exitApp}>Yes</button>
                <button class="no" onClick={hideExitModel}>No</button>
            </div>
        </div>
    )
}

export default ExitModal;