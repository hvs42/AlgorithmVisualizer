import { SWAP } from "../Helper/Flags";
import swap from "../Helper/Swap";

async function selectionSortMoves(array)
{
    const moves = [];
    const size = array.length;

    for (let i = 0; i < size - 1; i++)
    {
        let min_idx = i;
        for (let j = i + 1; j < size; j++)
        {
            if (array[j] < array[min_idx])
            {
                    min_idx = j;
            }

            moves.push([j, min_idx, !SWAP]);
        }

        await swap(array, min_idx, i);
        moves.push([i, min_idx, SWAP]);
    }

    return moves;
}

export default selectionSortMoves;