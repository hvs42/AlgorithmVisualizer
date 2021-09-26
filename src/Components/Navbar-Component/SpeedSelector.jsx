import React from 'react'

function SpeedSelector(props) {
    return (
        <li className="nav-item nav-elements">
            <select className="form-select form-select-sm" aria-label=".form-select-lg example"
                onChange={(e) => props.onChange(e.target.value, "speed")}
            >
                {props.speedLists.map(value =>{
                    return(
                        <option
                            key={value}
                            value={value}
                        >
                            {value}x
                        </option>
                    );
                })}
            </select>
        </li>
    )
}

export default SpeedSelector
