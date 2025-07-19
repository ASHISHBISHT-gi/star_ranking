const buttons=document.querySelectorAll('.buttons>button');
const submit=document.querySelector('button[type="submit"]');
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        console.log(buttons);
        // console.log(parseInt(button.innerText));
        // let counter=par
        button.classList.add="button_hover";
        for(let i=0;i<parseInt(button.innerText);i++){
            buttons[i].style.color="black";
        buttons[i].style.backgroundColor="white";
        }
        for(let i=parseInt(button.innerText);i<5;i++){
            buttons[i].style.color="white";
            buttons[i].style.backgroundColor="hsl(215, 18%, 23%)";
        }
    })
});
submit.addEventListener('click',(e)=>{
    submit.style.backgroundColor="hsl(0, 100%, 100%)";
    submit.style.color="hsl(216, 12%, 8%)";
});