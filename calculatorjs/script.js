let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.display');

function buttonClick(value) {
    console.log('Botón clickeado:', value);
    if (isNaN(parseInt(value)) && value !== '.') {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    console.log('Nuevo valor de buffer:', buffer);
    console.log('Running Total:', runningTotal);
    screen.innerText = buffer;
    console.log('Pantalla actualizada a:', screen.innerText);
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseFloat(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.slice(0, -1);
            }
            break; // Falta este break
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        case '.':
            if (buffer.indexOf('.') === -1) {
                buffer += '.';
            }
            break;
    }
}

function handleMath(symbol) {
    if (buffer === "0") {
        return;
    }

    const floatBuffer = parseFloat(buffer);

    if (runningTotal === 0) {
        runningTotal = floatBuffer;
    } else {
        flushOperation(floatBuffer);
    }

    previousOperator = symbol;
    buffer = "0";

    console.log('Operación realizada:', symbol, 'Running Total:', runningTotal);
}

function flushOperation(floatBuffer) {
    if (previousOperator === '+') {
        runningTotal += floatBuffer;
    }
    else if (previousOperator === '−') {
        runningTotal -= floatBuffer;
    }
    else if (previousOperator === '×') {
        runningTotal *= floatBuffer;
    }
    else if (previousOperator === '÷') {
        runningTotal /= floatBuffer;
    }
    console.log('Operación realizada:', previousOperator, 'Resultado:', runningTotal);
}

function handleNumber(numberString) {
    if (buffer === "0" && numberString !== '.') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    console.log('Inicializando...');
    const calcButtons = document.querySelectorAll('.calc-button');
    console.log('Elementos calc-button:', calcButtons);
    if (calcButtons.length > 0) {
        calcButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Click en botón:', this.innerText);
                buttonClick(this.innerText);
            });
        });
    } else {
        console.error('No se encontraron elementos .calc-button');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado');
    init();
});