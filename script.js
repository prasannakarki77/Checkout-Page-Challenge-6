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

// var email =document.getElementById("email");
// var name =document.getElementById("name");
// var phone =document.getElementById("phone");
// var address =document.getElementById("address");
// var city =document.getElementById("city");
// var country =document.getElementById("country");
// var postal =document.getElementById("postal");
// var save =document.querySelector("save-info");
// var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
// var message= []
// function submitForms(){

//     if (email.value==""|| name.value=="" || phone.value==""|| address.value==""|| city.value=="" || country.value==""|| postal.value==""|| save.value==""){
//         window.alert("Please fill in all the fields");
//         phone.focus();
//     }
//     if (email.value)
//     document.getElementById("form1").submit();
//     document.getElementById("form2").submit();
//     window.alert("Checkout successfull!!");
// }