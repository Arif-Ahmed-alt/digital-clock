
const second=document.querySelector(".sec");
const minute=document.querySelector(".min")
const hour=document.querySelector(".hrs")

let time=new Date();

let s=time.getSeconds();
let m=time.getMinutes();
let h=time.getHours();
let displaySec=0;
let displayMin=0;
let displayHrs=0;

function showTime(){
    s++;
    if(s/60 ==1){
        s=0;
        m++;
    }
    if(m/60==1){
        m=0;
        h++;
    }
   
        if(h>=13){
            h=h-12;
        }else{
            h=h;
        }

    if(s<10){
        displaySec='0'+s;
    }else{
        displaySec=s;
    }
    if(m<10){
        displayMin='0'+m;
    }else{
        displayMin=m;
    }
    if(h<10){
        displayHrs='0'+ h;
    }else{
        displayHrs= h;
    }

    hour.innerHTML=`${displayHrs}<p class="p1">Hour</p>`
    minute.innerHTML=`${displayMin}<p class="p2">Minute</p>`
    second.innerHTML=`${displaySec}<p class="p3">Second</p>`

 
}

window.setInterval(showTime,1000);
00