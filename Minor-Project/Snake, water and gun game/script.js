var number = Math.ceil(Math.random() * 3);
console.log(number);
let [s, w, g] = [1, 2, 3]
let inp = prompt("Enter 1 for snake, 2 for water and 3 for gun")

if ((number == s && inp == g) || (number == w && inp == s) || (number == g && inp == w)) {
   alert("You won");
}
else if (number == inp) {
   alert("Tied");
}
else{
   alert("You loss");
}