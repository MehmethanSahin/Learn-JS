let second = document.getElementById('second')
let milliSecond = document.getElementById('millisecond')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')
let timeInterval

let sec = 0
let milliSec = 0


const timer=()=>{
    milliSec++
    if(milliSec<9){
        milliSecond.innerHTML ="0" + milliSec
    }
     if(milliSec>9){
        milliSecond.innerHTML = milliSec;
    }
      if(milliSec>99){
        sec++
        second.innerHTML = "0" + sec;
        milliSec = 0;
        milliSecond.innerHTML = "0" + 0;
    }

     if(sec>9){
        second.innerHTML = sec
    }
}

start.addEventListener('click',()=>{
    clearInterval(timeInterval) //to prevent new self invoking
    timeInterval = setInterval(timer,10)
})

stop.addEventListener('click',()=>{
    clearInterval(timeInterval)
})

reset.addEventListener('click',()=>{
    clearInterval(timeInterval)
    sec = "00"
    milliSec = "00"
    second.innerHTML = sec
    milliSecond.innerHTML = milliSec
})