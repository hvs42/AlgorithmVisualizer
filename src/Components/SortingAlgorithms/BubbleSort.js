import { SWAP } from "../Helper/Flags";
import swap from "../Helper/Swap";

async function bubbleSortMoves(array)
{
    const moves = [];
    // const sortedIndex = [];

    for(let i=0; i<array.length-1; i++)
    {
        for(let j=0; j<array.length-i-1; j++)
        {
            if(array[j] > array[j+1])
            {
                await swap(array, j, j+1);
                moves.push([j, j+1, SWAP]);
            }
            else
            {
                moves.push([j, j+1, !SWAP]);
            }
            // sortedIndex.push(array.length-1);
        }

        // sortedIndex.push(array.length-1);
    }

    // return array;
    return moves;
}

export default bubbleSortMoves;