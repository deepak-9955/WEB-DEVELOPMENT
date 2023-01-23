let timer = document.getElementById("clock");

setInterval(time, 1000);

function time() {
    let clock = new Date();
    let h = clock.getHours();
    let m = clock.getMinutes();
    let s = clock.getSeconds();
    let d = clock.getDate();

    let time = h + ":" + m + ":" + s;
    timer.innerHTML = time;
    timer.style.fontSize = "100px";
}