import React from 'react'

function SizeSelector(props) {
    return (
        <li className="nav-item nav-elements ">
            <select className="form-select form-select-sm" aria-label=".form-select-lg example"
                onChange = {(e) => props.onChange(e.target.value, "size")}
            >
                {props.sizeLists.map(value =>{
                    return(
                        <option
                            key={value}
                            value={value}
                        >
                            {value}
                        </option>
                    );
                })}
            </select>
        </li>
    )
}

export default SizeSelector;
