function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First task complete');
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second task complete');
            resolve();
        }, 1000);
    });
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third task complete');
            resolve();
        }, 1000);
    });
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => {
        console.log('All tasks complete');
    });
