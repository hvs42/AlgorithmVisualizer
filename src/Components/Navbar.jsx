import React, { useState } from 'react'
import AlgoSelectors from './Navbar-Component/AlgoSelectors';
import ResetArray from './Navbar-Component/ResetArray';
import SizeSelector from './Navbar-Component/SizeSelector';
import SpeedSelector from './Navbar-Component/SpeedSelector';
import StartButton from './Navbar-Component/StartButton';
import logo from '../Assets/Logo.png';


function Navbar(props) {

    const [Algorithms, setAlgorithms] = useState( [
                                                    { id : 1, type: 'Bubble Sort' },
                                                    { id : 2, type: 'Selection Sort' },
                                                    { id : 3, type: 'Insertion Sort' },
                                                    { id : 4, type: 'Quick Sort' },
                                                    { id : 5, type: 'Merge Sort' },
                                                ]);

    const [size, setSize] = useState([10, 20, 30, 40, 50, 60]);
    const [speed, setSpeed] = useState([0.50, 0.75, 1.00, 2.00, 4.00]);


    return (
        <div className="navbar-div">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <div className="navbar-brand" >
                <img src={logo} alt="Algo-Visualizer"/>
                <span className="navbrandcss">Algo-Visualizer</span>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">

                <ResetArray 
                    newList={props.newList} 
                    size={props.size} 
                    disable={props.disable}
                    setReset = {props.setReset}
                />

                <AlgoSelectors 
                    onChange = {props.onChange}
                    algoLists = {Algorithms}
                />

                <SizeSelector 
                    onChange = {props.onChange}
                    sizeLists = {size.reverse()}
                />

                <SpeedSelector 
                    onChange = {props.onChange}
                    speedLists = {speed.reverse()}
                />

                <StartButton 
                    size={props.size}
                    newList={props.newList} 
                    start={props.start}
                    disable={props.disable}
                    setReset = {props.setReset}
                    isArraySorted = {props.isArraySorted}
                />
                </ul>
            </div>

            <div className="iconbar">

                
                <a href="https://github.com/hvs42" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-lg jump"></i>
                </a>

                <a href="https://www.linkedin.com/in/harsh-vardhan-singh-ba02591b4/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg jump" ></i>
                </a>
            </div>
            </nav>
        </div>
        
    );
}

export default Navbar
