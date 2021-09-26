import { SWAP } from "../Helper/Flags";
import swap from "../Helper/Swap";

async function QuickSort(arr)
{
    let moves = [];
    await quickSortDriver(arr, 0, arr.length-1, moves);

    return moves;
}

async function quickSortDriver(arr, low, high, moves)
{
    if (low < high) 
    { 
        let pi = await partition(arr, low, high, moves); 
  
        await quickSortDriver(arr, low, pi - 1, moves); 
        await quickSortDriver(arr, pi + 1, high, moves); 
    } 
}

async function partition(arr, low, high, moves)
{
    let pivot = arr[high];
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) 
    { 
        if(j !== high)
        {
            moves.push([high, j, !SWAP]);
        }
        if (arr[j] < pivot) 
        { 
            i++; 
            await swap(arr, i, j);
            moves.push([i, j, SWAP]);
        } 
    } 

    await swap(arr, i+1, high);
    moves.push([i+1, high, SWAP]);

    return (i + 1);
}

export default QuickSort;
