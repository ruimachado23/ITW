function calculator(num1, num2, operator) {

var num1 = document.getElementById("numb1");
var num2 = document.getElementById("numb3");
var res = document.getElementById("value");

var a = parseFloat(num1.value)

    switch (operator) {
        case "+":
            return  res.value = numb1 + numb2;
        case "-":
            return res.value = num1 - num2;
        case "*":
            return res.value = num1 * num2;
        case "/":
            if (num2 != 0){
                res.value = num1 / num2
            } 
            else{
                res.value = "ERRO: Divisão por zero!"
            }
            
        default:
            return "Invalid operator";
    }
    }
    

