
function reload1(){
    location.reload();
}


random = Math.random() * 5 + 1;
random2 = Math.random() * 5 + 1;

random = Math.round(random);
random2 = Math.round(random2);

if (random == random2) {
    document.querySelector(`.display-div p`).innerHTML= "Draw";

} else if (random < random2) { document.querySelector(`.display-div p`).innerHTML= "Player 2 Win";} 
else if (random > random2) { document.querySelector(`.display-div p`).innerHTML= "Player 1 Win" }

document.querySelector(`.circle:nth-child(${random})`).style.visibility = "hidden"
document.querySelector(`.circle:nth-child(${random2})`).style.visibility = "hidden"


switch (random) {
    case 1:
        document.querySelector(`.circle:nth-child(5)`).style.visibility = "visible";

        break;
    case 2:
        document.querySelector(`.circle:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(7)`).style.visibility = "visible";
        break;
    case 3:
        document.querySelector(`.circle:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(5)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(7)`).style.visibility = "visible";

        break;
    case 4:
        document.querySelector(`.circle:nth-child(1)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(7)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(9)`).style.visibility = "visible";

        break;
    case 5:
        document.querySelector(`.circle:nth-child(1)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(5)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(7)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(9)`).style.visibility = "visible";

        break;
    case 6:
        document.querySelector(`.circle:nth-child(1)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(4)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(7)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(6)`).style.visibility = "visible";
        document.querySelector(`.circle:nth-child(9)`).style.visibility = "visible";

        break;

    default:
        break;
}


switch (random2) {
    case 1:
        document.querySelector(`.circle2:nth-child(5)`).style.visibility = "visible";

        break;
    case 2:
        document.querySelector(`.circle2:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(7)`).style.visibility = "visible";
        break;
    case 3:
        document.querySelector(`.circle2:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(5)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(7)`).style.visibility = "visible";

        break;
    case 4:
        document.querySelector(`.circle2:nth-child(1)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(7)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(9)`).style.visibility = "visible";

        break;
    case 5:
        document.querySelector(`.circle2:nth-child(1)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(5)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(7)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(9)`).style.visibility = "visible";

        break;
    case 6:
        document.querySelector(`.circle2:nth-child(1)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(4)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(7)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(3)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(6)`).style.visibility = "visible";
        document.querySelector(`.circle2:nth-child(9)`).style.visibility = "visible";

        break;

    default:
        break;
}

