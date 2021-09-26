import React from 'react';

function AlgoButtons(props) {
    // console.log(props);
    return (
        <li className="nav-item nav-elements">
            <select className="form-select form-select-sm" aria-label=".form-select-lg example"
                onChange={(e) => {props.onChange(e.target.value, "algorithm")}}
            >
                {props.algoLists.map(value =>{
                    return(
                        <option
                            key={value.id}
                            value={value.id}
                        >
                            {value.type}
                        </option>
                    );
                })}
            </select>
        </li>
    )
}

export default AlgoButtons;
