/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
document.querySelector('#addNumbers').addEventListener('click', function () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
});

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2
}
document.querySelector('#subtractNumbers').addEventListener('click', function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
});
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

document.querySelector('#multiplyNumbers').addEventListener('click', () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
});
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

document.querySelector('#divideNumbers').addEventListener('click', () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
});

/* Decision Structure */
function getTotal() {

    let subtotal = parseFloat(document.getElementById("subtotal").value)

        if (document.getElementById('member').checked) {
            subtotal = subtotal * 0.8;
        } 
        document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', getTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById('array').textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 !==1);
/* Output Sum of Org. Array */
let together = numbersArray.reduce((sum, number) => sum + number)

document.getElementById('sumOfArray').textContent = together;
/* Output Multiplied by 2 Array */
let times = numbersArray.map(number => number * 2)

document.getElementById('multiplied').textContent = times;
/* Output Sum of Multiplied by 2 Array */
let togetherAgain = times.reduce((sum, number) => sum + number)

document.getElementById('sumOfMultiplied').textContent = togetherAgain;
