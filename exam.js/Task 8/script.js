/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


let calc = {"+": (x, y) => x + y, 
               "-": (x, y) => x - y,   
               "*": (x, y) => x * y,
               "/": (x, y) => x / y};

let num1 = 10;
let num2 = 5;
let op = "-";

let func = calc[op];

if(func) {
    let result = func(num1, num2);
    console.log(result);

} else {
} 
            



   