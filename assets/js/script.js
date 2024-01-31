var buttonStop = document.querySelector(".js-stop");
var addCard = document.querySelector(".js-add-card");
var plyaerPoints = document.querySelector(".player-points");

var totalPlayerpoints = 0;

addCard.addEventListener("click", function(){
    buttonStop.disalbled = true;
    var cardEl = document.createElement("div");
    cardEl.classList.add("cards");
    
    var ranNr = Rnd();

    cardEl.innerHTML = ranNr;
    document.querySelector(".c-card").appendChild(cardEl);

    var sumCard = cardEl.innerHTML;
    totalPlayerpoints += parseInt(sumCard);
    plyaerPoints.innerHTML = totalPlayerpoints;

    if(totalPlayerpoints >= 16){
        buttonStop.removeAttribute("disabled");

        buttonStop.addEventListener("click", function(){
            computer();
        })
    }
    else if(totalPlayerpoints > 16){

    }
})

function computer(){
    var Points = 0;
    var computerPoints = document.querySelector(".computer-point");
   
    setInterval(function(){
        var cardEl = document.createElement("div");
        cardEl.classList.add("computer");
       
        var ranNr = Rnd();

        cardEl.innerHTML = ranNr;
        document.querySelector(".c-computer").appendChild(cardEl);

        Points += parseInt(ranNr);
        computerPoints.innerHTML = Points;
        
    },1000);
    

}

function Rnd(){
    return Math.floor(Math.random() * 16) + 1;
}