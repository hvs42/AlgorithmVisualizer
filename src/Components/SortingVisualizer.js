import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Importing Components
import Navbar from "./Navbar";
import Info from './Info';
import Bars from './Bars';
import Footer from './Footer';
// import Timer from './Timer/Timer';

//Importing algorithms 

import insertionSortMoves from './SortingAlgorithms/InsertionSort';
import bubbleSortMoves from './SortingAlgorithms/BubbleSort';
import selectionSortMoves from './SortingAlgorithms/SelectionSort';
import QuickSort from './SortingAlgorithms/QuickSort';
import MergeSort from './SortingAlgorithms/MergeSort';

//importing Helpers 

import generateNewArray from './Helper/generateNewArray';
import generateKey from './Helper/KeyGenerator';
import pause from './Helper/pause';

//importing Flags

import { SWAP} from './Helper/Flags';

import { ALGORITHM, SPEED, SIZE } from './Helper/Flags';

import { CURRENT, NORMAL, DONE } from './Helper/Flags';


function SortingVisualizer() {

    const [array, setArray] = useState([]);
    const [size, setSize] = useState(40);
    const [speed, setSpeed] = useState(4);
    const [algorithm, setAlgorithm] = useState(1);
    const [running, setRunning] = useState(false);
    const [reset, setReset] = useState(false);
    const [isArraySorted, setArrayIsSorted] = useState(false);

    useEffect(() => {
       let newArr = generateNewArray(40);

       setArray(newArr);

    },[]);

    return (
        <>
            <Navbar 
                start={start}
                onChange = {onChange}
                newList={generateArray}
                size={size}
                disable={running}
                setReset={setReset}
                isArraySorted={isArraySorted}
            />

            <Info algorithm={algorithm} /> 
            {/* <Timer reset={reset} running={running} setReset={setReset}/> */}
            <Bars newArray={array}/>

            <ToastContainer />
            <Footer />
        </>
    );


    

    function onChange(value, target)
    {
        if(target === ALGORITHM && !running)
        {
            setAlgorithm(Number(value));
        }
        else if(target === SIZE && !running)
        {
            setSize(Number(value));
            generateArray(0, value);
        }
        else if(target === SPEED)
        {
            setSpeed(Number(value));
        }
    }

    function generateArray(value = 0, tempsize)
    {
        if((tempsize !== size  &&  !running) || value === 1)
        {
            // console.log("called")
            let newArr = generateNewArray(Number(tempsize));
            setArray(newArr);
            setArrayIsSorted(false);
            // console.log(array.length);
        }
    }

    async function start()
    {
        // console.log("start")
        setRunning(true);

        let moves = await getMoves(algorithm);
        await visualiseTheAlgo(moves);
        await done();
        
        setRunning(false);
    }
    
    async function getMoves(algochoice)
    {
        let arr = await generateKey(array);
        // console.log(algochoice);
        let moves = [];
        
        switch(Number(algochoice))
        {
            case 1 : //console.log("Bubble");
                    moves = await bubbleSortMoves(arr);
            break;


            case 2 : //console.log("Selection");
                    moves = await selectionSortMoves(arr);
            break;


            case 3 : //console.log("Insertion");
                    moves = await insertionSortMoves(arr);
            break;

            
            case 4 : console.log("Quick");
                    moves = await QuickSort(arr);
            break;

            case 5 : console.log("Merge");
                        moves = await MergeSort(arr);
            break;  
                
                
            default : console.log("Wrong Input"); 
        }

        return moves;
    }

    async function visualiseTheAlgo(moves)
    {
        if(moves.length === 0)
        {
            return;
        }

        if(moves[0].length !== 4)
        {
            await visualiseGroup1Algo(moves);
        }
        else
        {
            console.log("Entering");
            await visualiseGroup2Algo(moves);
        }
    }

    async function visualiseGroup1Algo(moves)
    {
        
        //console.log("array :- " + array.key);
        while(moves.length > 0)
        {
            let currMove = moves[0];
            
            let index = [currMove[0], currMove[1]];


            
          //  console.log("moves :- " + moves);
            //console.log("index :- " + index);

            await updateClass(index, CURRENT);

            if(currMove[2] === SWAP)
            {
                await updateArray(index);
            }

            await updateClass(index, NORMAL);
            
          //  console.log("array :- " + array.key);

            moves.shift();
        }
    }

    async function visualiseGroup2Algo(moves)
    {
        let previous = [];
        while(moves.length > 0)
        {
            if(previous !== moves[0][3])
            {
                await updateClass(previous, NORMAL);
                previous = moves[0][3];
                await updateClass(moves[0][3], CURRENT);
            }

            let index = [moves[0][0], moves[0][1]];
            await updateValue(index);

            moves.shift();
        }
    }

    async function updateArray(index)
    {
        let arr = [...array]
        
        let temp = arr[index[0]].key;
        arr[index[0]].key = arr[index[1]].key;
        arr[index[1]].key = temp;

        await updateStateChange(arr);
    }

    

    async function updateValue(index)
    {
        let arr = [...array];

        arr[index[0]].key = index[1];

        await updateStateChange(arr);
    }



    async function updateClass(index, classType)
    {
        let arr = [...array];
        for(let i=0; i<index.length; i++)
        {
            arr[index[i]].classType = classType;
        }

        await updateStateChange(arr);
    }

    async function updateStateChange(arr)
    {
        setArray(arr);
        await pause(speed);
    }

    async function done()
    {
        setArrayIsSorted(true);
        let arr = array.slice();
        for(let i=0; i<arr.length; i++)
        {
            arr[i].classType = DONE;
        }
        toast.success(' Array Sorted ', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        updateStateChange(arr);
    }


}

export default SortingVisualizer;
