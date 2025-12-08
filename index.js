function add( a, b ) {
    return a + b;
}

function substract( a, b ) {
    return a - b;
}

function multiply( a, b ) {
    return a * b;
}

function divide( a, b ) {
    if ( b = 0 ) alert( "Dividing by 0 is not accepted" )
    return a / b;
}

function operate( operator, num1, num2 ) {
    switch ( operator ) {
        case "+":
            add( num1, num2 );
            break;
        case "-":
            substract( num1, num2 );
            break;
        case "x":
            multiply( num1, num2 );
            break;
        case "/":
            divide( num1, num2 );
            break;
        case "=":
            calculate()
            break
    }
}

function chooseNumber() {
    numBtn.forEach( ( btn ) => btn.addEventListener( "click", retrieveNum ) );
}

function chooseOperator() {
    opeBtn.forEach( ( btn ) => btn.addEventListener( "click", () => ope = btn.textContent ) );
}

function retrieveNum() {
    num += this.textContent;
    display( num );
    return num;
}

function display( num ) {
    const resultsBox = document.querySelector( "div.results" )
    resultsBox.textContent = num;
}

function clear() {
    document.querySelector( "button.clear" ).addEventListener( "click", () => {
        display( "0" );
        eraseMemory();
    } );
}

function calculate() {
    const equalBtn = document.querySelector( "button.operators:last-child" );
    equalBtn.addEventListener( "click", () => {
        num1 = num;
        console.log( num1 )
    } )
}

function eraseMemory() {
    num1 = "";
    num2 = "5";
    num = "";
    ope = "";
}

const numBtn = document.querySelectorAll( "button.numbers" );
const opeBtn = document.querySelectorAll( "button.operators" );
let num = "";
let num1 = "";
let num2 = "";
let ope = "";

chooseNumber();
calculate();
clear();


