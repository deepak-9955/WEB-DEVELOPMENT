class passwordGenerator {
    constructor() {
        console.log("Welcome to password generator");
        this.pass = ""
    }
    generator(len) {
        let char = "abcdefghijklmnopqrstuvwxyz";
        let num = "1234567890";
        let special = "`~!@#$%^&*()_+=-{}[]:'<>?,./";

        if (len < 10) {
            alert("Password length must be 10");
            return null;
        }
        else {
            for (let i = 0; i < len; i += 3) {
                this.pass += char[Math.floor(Math.random() * char.length)];
                this.pass += num[Math.floor(Math.random() * num.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
            }
        }
        return this.pass.slice(0, len);
    }

}

let p = new passwordGenerator();
let len = prompt("Enter the length of your password")
let p1 = p.generator(Number(len));
document.write("Your password is : " + (p1));