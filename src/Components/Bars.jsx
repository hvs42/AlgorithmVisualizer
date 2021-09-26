import React from 'react';

function Bars(props) {
    return (
        <div className="array-container">
            
                {
                    props.newArray.map((value, idx) => {

                        return(
                            <div 
                                className= {"bars " + getClass(value.classType)}
                                key={idx} 
                                style={{height: `${value.key}px`}}
                                value={value.key}
                            >
                            {/* <span>{value.key}</span> */}
                            </div>
                        );
                    })
                }
        </div>
    )

}

const getClass = (value) => {
    if(value === 0) return 'array-bar';
    else if(value === 1) return 'array-bar current';
    return 'array-bar done';
};
export default Bars;