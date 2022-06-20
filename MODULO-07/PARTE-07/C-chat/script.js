
const chatSquare = document.querySelector(".chatSquare");
const messageWritten = document.querySelector("#messageWritten");

function sendMessage() {
    if (messageWritten.value !== "") {
        chatSquare.innerHTML += `Você:  ${messageWritten.value} \n`;
        chatSquare.scrollTop += chatSquare.scrollHeight;  
        messageWritten.value = "";
    }
    return;
}

messageWritten.addEventListener("keydown", (enter)=>{
    if (enter.keyCode === 13) {
        sendMessage();
    }
})

function cleanSquare() {
    chatSquare.innerHTML = "";
}