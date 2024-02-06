// program for a simple calculator
const prompt=require("prompt-sync")();
const n1 = parseInt(prompt("Enter the first number :"))
const Op = parseFloat(prompt("Enter operator :"))
const n2 = parseFloat(prompt("Enter the second number :"))

switch(Op)
{
case "+" :
    console.log(a+b)
    break;
    case "-" :
    console.log(a-b)
    break;
    case "*" :
    console.log(a*b)
    break;
    case "/" :
    console.log(a/b)
    break;
    case "%" :
    console.log(a%b)
    break;
    default :
    console.log("Incorrect")
    break;
}