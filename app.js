let start=0;
let game=[];
let user=[];
let level=0;
let h2=document.querySelector("h2");
let colorbtn=["red","yellow","green","blue"];
document.addEventListener("keypress",function(){
    if(start==0){
        start=1;
        console.log("game started");
        levelup();
    }


});


function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash")
   },200);
}
function levelup(){
  user=[];
    level++;
    h2.innerText=`level=${level}`;
    let rndidx=Math.floor(Math.random()*3);
    let randcolor=colorbtn[rndidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    game.push(randcolor);
    btnflash(randbtn);
}
function checkans(idx){
    if(user[idx]===game[idx]){
      if(user.length==game.length){
        setTimeout(levelup,1000);
      }
    }else{
        h2.innerText=`Game over with score ${level}! press any key to start`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function() { body.style.backgroundColor="white"},150);
        reset();
    }

}
function btnpress(){
    let btn=this;
    btnflash(btn);
    userColor=btn.getAttribute("id");
    user.push(userColor);
    checkans(user.length-1);
}
let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
  btn.addEventListener("click",btnpress);
}
function reset(){
  level=0;
  user=[];
  game=[];
  start=0;
}
