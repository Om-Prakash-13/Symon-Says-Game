let gameSeq = [];
let userSeq = [];
let isStarted = false;
let level = 0; 
let btns = ["yellow","red","green","blue"];
let Score = 0;
let highScore = 0;

let body = document.querySelector("body");
body.addEventListener("keypress",()=>{
    if(isStarted == false){
        startGame();
        isStarted = true;
    }
    for(let b of btns){
        let btn = document.querySelector(`.${b}`);
        btn.addEventListener("click",buttonPress);
    }
});

function startGame(){
    levelUp();
    btnFlash();
}

function levelUp(){
    userSeq = [];
    level++;
    h2 = document.querySelector("h2");
    h2.innerText = `level - ${level}`;
    Score = level;
    highScore = Math.max(Score,highScore);
    document.querySelector(".score").innerText = `Score : ${Score}`;
    document.querySelector(".highScore").innerText = `High Score : ${highScore}`;
}

function btnFlash(){
    console.log("button flash");
    let randomNo = Math.floor(Math.random()*4);
    let randomColor = btns[randomNo];
    let randomBtn = `.${randomColor}`;
    gameSeq.push(randomColor);
    console.log(gameSeq);
    randomBtn = document.querySelector(randomBtn);
    randomBtn.classList.add("flash");
    setTimeout(()=>{
        randomBtn.classList.remove("flash");
    },250);
}

function buttonPress(){
    let btn = this;
    let color = btn.getAttribute("id");
    userSeq.push(color);
    track(userSeq.length-1);
}

function track(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(startGame,1000);
        }
    }else{
        console.log("game over.");
        reset();
    }
}

function reset(){
    body.style.backgroundColor = "red";
    setTimeout(()=>{
        body.style.backgroundColor = "white"
    },300)
    h2.innerText = "Press any key to start again.";
    isStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}