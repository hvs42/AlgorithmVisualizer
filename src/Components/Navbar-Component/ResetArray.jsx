import React from 'react'

function ResetArray(props) {
    return (
        <li className="nav-item nav-elements">
                    <button 
                    type="button" 
                    className="btn btn-outline-primary"
                    onClick={() => {props.newList(1, props.size); props.setReset(true)}}
                    disabled={props.disable?true:false}
                >
                        Reset Array  
                </button>
        </li>
    )
}

export default ResetArray;
