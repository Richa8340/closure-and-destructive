/** You are buildin a counter application that tracks the number o times a button is clicked. Implement the
counter usin closure.   */

function createCounter() {
    let count = 0; 

    return function() {
        count += 1; 
        console.log(count); 
    };
}

const incrementCounter = createCounter(); 

incrementCounter(); // Output: 1
incrementCounter(); // Output: 2
incrementCounter(); // Output: 3
