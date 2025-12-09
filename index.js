function add( a, b ) {
    return num2 = a + b;
}

function alertUser( str ) {
    const body = document.querySelector( "body" );
    const alertDiv = document.createElement( "div" )
    alertDiv.className = "alert-container border-grey alert-text";
    alertDiv.textContent = str;
    body.appendChild( alertDiv );
}

function chooseNumber() {
    numBtn.forEach( ( btn ) => btn.addEventListener( "mousedown", () => {
        clearAlertUser();
        cleanNum( btn.textContent );
        desactivateDotBtn();
        displayNum( num1 );
    } ) );
}

function cleanNum( num ) {
    if ( !num1 ) num1 = "";
    if ( ope === "=" ) displayOpe( "" );
    num1 += num;
}

function chooseOperator() {
    opeBtn.forEach( ( btn ) => btn.addEventListener( "mousedown", () => {
        clearAlertUser();
        handleOpeError( btn.textContent );
    } ) );
}

function clear() {
    document.querySelector( "button.clear" ).addEventListener( "mousedown", () => {
        displayNum( "0" );
        displayOpe( "" );
        clearNum();
        clearOpe();
    } );
}

function clearAlertUser() {
    const alertDiv = document.querySelectorAll( "div.alert-container" );
    alertDiv.forEach( ( div ) => {
        if ( div ) div.remove();
    } );
}

function desactivateDotBtn() {
    if ( num1.includes( "." ) ) {
        document.querySelector( "button.dot" ).disabled = true;
    }
}

function clearNum() {
    num1 = null;
    num2 = null;
}

function clearOpe() {
    ope = null;
}

function displayNum( num ) {
    const resultsBox = document.querySelector( "div.results" )
    resultsBox.textContent = num;
}

function displayOpe( ope ) {
    const resultsBox = document.querySelector( "div.operator" )
    resultsBox.textContent = ope;
}

function divide( a, b ) {
    if ( b == 0 ) {
        alertUser( "Division by 0 are not permitted" );
        clearNum();
        return;
    }
    return num2 = a / b;
}

function handleOpeError( operator ) {
    if ( !num1 ) {
        alertUser( "Choose a number please" );
        displayNum( num2 );
        ( !num2 ) ? displayOpe( "" ) : displayOpe( ope );
        return
    }
    operate( ope, +num1, +num2 );
    terminate( operator );
    ope = operator;
    displayOpe( ope );
    num1 = "";
}

function multiply( a, b ) {
    return num2 = a * b;
}

function operate( operator, currNum, totalNum ) {
    if ( !num2 ) {
        num2 = num1;
    } else {
        switch ( operator ) {
            case "+":
                add( totalNum, currNum );
                break;
            case "-":
                substract( totalNum, currNum );
                break;
            case "×":
                multiply( totalNum, currNum );
                break;
            case "÷":
                divide( totalNum, currNum );
                break;
            default:
                break;
        }
    }
    document.querySelector( "button.dot" ).removeAttribute( "disabled" );
    roundNumber( num2 );
    displayNum( num2 );
}

function roundNumber( num ) {
    if ( num == Math.floor( num ) ) {
        return
    } else {
        num2 = Math.round( num * 100000000 ) / 100000000
    }
}

function substract( a, b ) {
    return num2 = a - b;
}

function terminate( ope ) {
    if ( ope === "=" ) {
        clearNum();
        displayOpe( "=" );
        clearOpe();
    };
}

let num1;
let num2;
let ope;
const numBtn = document.querySelectorAll( "button.numbers" );
const opeBtn = document.querySelectorAll( "button.operators" );

chooseNumber();
chooseOperator();
clear();
