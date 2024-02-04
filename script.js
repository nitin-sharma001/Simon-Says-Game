

var btns = ["yellow", "green", "blue", "red"];
var gameSeq = [];
var userSeq = [];

var start = false;
var level = 0;
var highscore = 1;

let h2 = document.querySelector("#text");
let h3 = document.querySelector("h3");
document.querySelector("body").addEventListener("keypress", () => {
    if(start == false){
        start = true;

        levelUp();
    }
})


function btnFlash(btn){
    
    btn.classList.add("btnflash");
    setTimeout(function(){
        btn.classList.remove("btnflash");
    },500)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 500)
}
function levelUp(){

   
    userSeq = [];
    level++;
    if(level >= highscore){
        highscore = level;
    }

    h2.textContent = `Level : ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    
    let randomButton = document.querySelector(`#${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq)
    btnFlash(randomButton);
}


function checkAns(index){
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1500);
        }
    }else{
        h2.innerHTML = `Game Over! </br> Your score was <b>${level} </b> </br>
                            Press Any Key to Start`;

        h3.textContent = `HigherScore = ${highscore}`;
        document.querySelector("h4").style.display = "block";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("h4").style.display = "none";
        }, 800)


        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

var allButtons = document.querySelectorAll(".button");
for(let btn of allButtons){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}