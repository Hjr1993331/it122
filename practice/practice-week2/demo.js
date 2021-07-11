const myCounter = () => {
    let counter = 0; 
    return {
        increment: (inc) => { 
            counter += inc;
        },
        getValue: () => {
            return counter;
        }
    };
};

calculator = myCounter()
console.log(calculator.getValue)
console.log(calculator.getValue())
calculator.increment(3)
console.log(calculator.getValue())