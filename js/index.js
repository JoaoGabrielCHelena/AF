var txt = "Agriculture Financial Services"
var i = 0
var typing = true

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function typeWriter() {
    if (typing == true) {
        document.querySelector("h1").innerHTML += txt.charAt(i);
        i++;
        if (i == txt.length +1) {
            sleep(1000)
            typing = false
        }
    }
    if (typing == false) {
        document.querySelector("h1").innerHTML = document.querySelector("h1").innerHTML.slice(0, -1);
        if (document.querySelector("h1").innerHTML == "") {
            sleep(1000)
            typing = true
            i = 0
        }
    }
}
setInterval(typeWriter, 100)