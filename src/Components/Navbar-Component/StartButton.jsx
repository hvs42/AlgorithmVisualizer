import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function StartButton(props) {

    const [checkAlert, setcheckAlert] = useState(false);

    function checkHover(){
        
    }
    return (
        <li className="nav-item nav-elements">
                <button 
                    type="button" 
                    className="btn btn-outline-primary"
                    onMouseOver={checkHover}
                    onClick={() => {props.start(); props.setReset(true);}}
                    disabled={(props.disable || props.isArraySorted)?true:false}
                >
                    Start  
                </button>
        </li>
    )
}

export default StartButton
