// Create promise

const marriagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Just Married');
        } else {
            reject('Its me, its not you');
        }
    }, 1000);
});

// Pending state
console.log(marriagePromise);

// Consume promise
marriagePromise
    .then((result) => {                 //fulfilled state
    console.log(result);
    })
    .catch((reason) => {                // failed state
    console.log('Marriage canceled: ', reason);
    })
    .finally(() => {                    // happens (always) after then/catch
        console.log('Pay the wedding');
    })

// Promise all - if one rejects all rejects
Promise.all([
    marriagePromise,
    Promise.resolve('Some promise'),
    'Pesho', 
    Promise.reject('failed operation'),
    20
    ])
    .then((result) => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        
    })

// Promise allSettled - some may reject
Promise.allSettled([
    marriagePromise,
    Promise.resolve('Some promise'),
    'Pesho', 
    Promise.reject('failed operation'),
    20
    ])
    .then((result) => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        
    })

// Promise.race() - resolves the fastest
Promise.race([

])
