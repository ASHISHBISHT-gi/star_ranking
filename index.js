const buttons = document.querySelectorAll('.buttons>button');
const submit = document.querySelector('button[type="submit"]');
const submition = document.querySelector(".submition");
const main = document.querySelector("main");
const body = document.querySelector("body");
const span = document.querySelector("span");
body.removeChild(submition);
let rating = 0;
function star(button) {
    console.log(buttons);
    // console.log(parseInt(button.innerText));
    // let counter=par
    // button.classList.add="button_hover";
    rating = parseInt(button.innerText);
    for (let i = 0; i < parseInt(button.innerText); i++) {
        buttons[i].style.color = "black";
        buttons[i].style.backgroundColor = "white";
    }
    for (let i = parseInt(button.innerText); i < 5; i++) {
        buttons[i].style.color = "white";
        buttons[i].style.backgroundColor = "hsl(215, 18%, 23%)";
    }
}
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        star(button);
    })
    button.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            star(button);
        }
});
});
submit.addEventListener('click', (e) => {
    submit.style.backgroundColor = "hsl(0, 100%, 100%)";
    submit.style.color = "hsl(216, 12%, 8%)";
    span.innerText = rating;
    body.removeChild(main);
    body.appendChild(submition);
});