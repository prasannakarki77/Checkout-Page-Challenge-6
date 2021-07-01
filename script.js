document.getElementById("no-of-items1").value= 1;
document.getElementById("no-of-items2").value= 1;
function increment1(){
    console.log(document.getElementById("no-of-items1").value);
    var currentInput = document.getElementById("no-of-items1").value;
    currentInput++;
    document.getElementById("no-of-items1").value = currentInput;
    console.log(currentInput);
    
}

function decrement1(){
    console.log(document.getElementById("no-of-items1").value);
    var currentInput = document.getElementById("no-of-items1").value - 1;
    if (currentInput<1){
        return
    }
    document.getElementById("no-of-items1").value = currentInput;
    console.log(currentInput);
}

document.getElementById("no-of-items2").value= 1;
function increment2(){
    console.log(document.getElementById("no-of-items2").value);
    var currentInput = document.getElementById("no-of-items2").value;
    currentInput++;
    document.getElementById("no-of-items2").value = currentInput;
    
}

function decrement2(){
    console.log(document.getElementById("no-of-items2").value);
    var currentInput = document.getElementById("no-of-items2").value - 1;
    if (currentInput<1){
        return
    }
    document.getElementById("no-of-items2").value = currentInput;
}

function submitForms(){
    window.alert("Checkout successfull!!");
}
