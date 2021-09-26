import { CHANGE_VALUE } from "../Helper/Flags";

async function MergeSort(array)
{

    const  moves = [];

    await mergeSortDriver(array, 0, array.length - 1,  moves);

    return  moves;
}

async function mergeSortDriver(array, start, end,  moves)
{
    if(start < end)
    {
        const middleIndex = Math.floor((start + end) / 2);

        await mergeSortDriver(array, start, middleIndex, moves);
        await mergeSortDriver(array, middleIndex+1, end, moves);
        await merge(array, start, middleIndex,end, moves);
    }
}

async function merge(array, start, middleIndex, end, moves)
{
    let i = start;
    let j = middleIndex + 1;
    let sortedArray = [];

    while(i<=middleIndex && j<=end)
    {
        if(array[i] <= array[j])
        {
            sortedArray.push(array[i]);
            i++;
        }
        else
        {
            sortedArray.push(array[j]);
            j++;
        }
    }

    while(i<=middleIndex)
    {
        sortedArray.push(array[i]);
        i++;
    }

    while(j<=end)
    {
        sortedArray.push(array[j]);
        j++;
    }

    let indexes = [];

    for(let k=start; k<=end; k++)
    {
        indexes.push(k);
    }

    for(let k=start; k<=end; k++)
    {
        array[k] = sortedArray[k-start];
        moves.push([k, array[k], CHANGE_VALUE, indexes]);
    }
}

export default MergeSort;