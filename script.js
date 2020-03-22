let num = +prompt("enter the number");
let firstNumber=0;
let secondNumber=1;
for(let i=0; i<=num; i++) {
    let thirdNumber = firstNumber+secondNumber;
    firstNumber=secondNumber;
    secondNumber=thirdNumber;
    document.write(thirdNumber+"<br>")
}

