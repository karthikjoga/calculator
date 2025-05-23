const Display = document.getElementById("display");

function appendToDisplay(input){
    Display.value += input
}
function clearDisplay(){
    Display.value = "";
}
function Calculate(){
    try {
        Display.value = eval(Display.value)
    } catch (error) {
        Display.value = "Error";
    }
}