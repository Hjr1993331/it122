fs = require('fs');
console.log('step 1');
fs.readFile('demo.js', (err, data) => {
    if(err) {
        console.log('Oops!')
        console.log(err)

    } else {
        console.log('step 2') 
        console.log(data)
    }
});
console.log('step 3')