const emojis = [
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
    "🐷",
    "🐷",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐻",
    "🐻",
    "🐶",
    "🐶",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));


for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);

          // Tocar a música após o primeiro clique
        if (openCards.length === 1) {
            var musica = document.getElementById("musicaDeFundo");
            console.log("Tentando tocar a música...");
            musica.play().catch(error => {
                console.log("Erro ao tentar tocar a música: ", error);
            });
            musica.volume = 0.2;
        }
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length == emojis.length){
        alert("🎉Você venceu, Parabéns!🎉😀")

           // Parar a música ao vencer
           var musica = document.getElementById("musicaDeFundo");
           musica.pause();  // Pausa a música
           musica.currentTime = 0;  // Reseta 
           musica.volume = 0.2;
    }
}