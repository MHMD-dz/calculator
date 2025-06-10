let Display = document.getElementById('display')

// append
function appendToDisplay(input) {
    Display.value += input ;
}

// clear

function clearDisplay() {
    Display.value = '' ;
}

//calcul

function calculate() {
    try {
        Display.value = eval(Display.value);
    } catch (error) {
        Display.value = 'ERROR';
    }
    
}