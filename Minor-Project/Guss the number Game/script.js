let number = Math.floor(Math.random() * 100) + 1;
console.log(number);
var inp;
var count = 0;

while (inp != number) {
    inp = prompt("Enter number");

    if (inp == number) {
        console.log("Matched");
    }
    else if (inp < number) {
        console.log("Number is bigger");
    }
    else {
        console.log("Number is smaller");
    }
    count++;
}


document.write(`Number of turn : ${count}`);

