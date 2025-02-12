console.log("Part 1: Declaring and Invoking Functions");


function greet(name = "Ahmed") {  //Part 1: Declaring and Invoking Functions
    return `Hello ${name}.`;
}

console.log(greet("Dor"));

console.log("Part 2: Working with Parameters and Returning Values");


function addNumbers(num1, num2) {  //Part 2: Working with Parameters and Returning Values

    return num1 + num2
}

console.log(addNumbers(9, 10));

console.log('Part 3: Function Scope');


let x = 10; //Part 3: Function Scope

console.log(x);


function changeValue() {
    let x = 15
    console.log(x);
}


changeValue();

console.log(x);

console.log('Part 4: Closures');


function outerFunction() {     //Part 4: Closures
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

let increment = outerFunction()

increment()
increment()
increment()

console.log('Bonus Challenge');


console.log(greet());    //Bonus Challenge:

function outerFunction2() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
    };
}

let counter = outerFunction2();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());


