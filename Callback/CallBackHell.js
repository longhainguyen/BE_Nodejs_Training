function firstTask(callback) {
    setTimeout(() => {
        console.log('First task complete');
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log('Second task complete');
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log('Third task complete');
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log('All tasks complete');
        });
    });
});
