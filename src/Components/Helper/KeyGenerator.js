
function generateKey(array) {
    let res = [];
    for(let i=0; i<array.length; i++)
    {
        res.push(Number(array[i].key));
    }

    return res;
}

export default generateKey;