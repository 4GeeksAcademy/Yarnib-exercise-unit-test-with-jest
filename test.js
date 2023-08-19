// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

function fromDollarToYen(dollarAmount) {
    // Calculate equivalent amount in Japan Yen
    const yenAmount = dollarAmount * oneEuroIs["USD"] * oneEuroIs["JPY"];
    return yenAmount;
}

function fromYenToPound(yenAmount) {
    // Calculate equivalent amount in England Pound
    const poundAmount = yenAmount * (1 / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return poundAmount;
}

// Test cases
const dollarAmount = 100;
const yenAmount = 10000;

const convertedYen = fromDollarToYen(dollarAmount);
const convertedPound = fromYenToPound(yenAmount);

console.log(`${dollarAmount} USD is approximately ${convertedYen.toFixed(2)} JPY`);
console.log(`${yenAmount} JPY is approximately ${convertedPound.toFixed(2)} GBP`);
