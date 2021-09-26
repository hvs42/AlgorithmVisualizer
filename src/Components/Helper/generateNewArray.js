function randomRange(min, max)
{
    return Math.floor( (Math.random() * (max-min +1) ) + min );
}

function generateNewArray(length)
{
    let newArray = [];

    for(let i=0; i<length; i++)
    {
        newArray.push({key : randomRange(1, 100)*4, classType : 0});
    }
    
    return newArray;
}

export default generateNewArray;