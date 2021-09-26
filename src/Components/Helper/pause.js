const pause = async(speed) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 200/speed);
    });
}

export default pause;