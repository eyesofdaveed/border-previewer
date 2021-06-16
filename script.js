const btn = document.getElementById("btn");
const container = document.getElementById("container");
const topleft = document.getElementById("top-left");
const topright = document.getElementById("top-right");
const botleft = document.getElementById("bot-left");
const botright = document.getElementById("bot-right");
const clipboard = document.getElementById("clipboard");

btn.addEventListener("click" , (e) => {
    e.preventDefault();

    adjustBorders();
});

function adjustBorders (){
    var topleftValue = "0";
    var toprightValue = "0";
    var botleftValue = "0";
    var botrightValue = "0"; 

    topleftValue = topleft.value.trim();
    toprightValue = topright.value.trim();
    botleftValue = botleft.value.trim();
    botrightValue = botright.value.trim(); 

    container.style.borderTopLeftRadius = topleftValue.concat("px");
    container.style.borderTopRightRadius =  toprightValue.concat("px");
    container.style.borderBottomLeftRadius=  botleftValue.concat("px");
    container.style.borderBottomRightRadius =  botrightValue.concat("px");

    clipboard.innerText = `
    height: 50vh;
    width: 50vh;
    border-width: 0.1rem;
    border-style: solid;
    background: linear-gradient(#e66465, #9198e5);
    border-radius: ${topleftValue}px ${toprightValue}px ${botrightValue}px ${botleftValue}px`;
}