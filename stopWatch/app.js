let start = document.getElementById('start')
let stop = document.getElementById('pause')
let reset = document.getElementById('reset')
let displayTimer = document.getElementById('stopwatch')

let sec = 0;
let min = 0;
let hr = 0;
let stopper = true

start.addEventListener('click',function(){
    if(stopper==true){
        stopper=false
        timer()
    }
})
stop.addEventListener('click',function(){
    if(stopper==false){
        stopper=true
        console.log("stop")
    }
})
reset.addEventListener('click',function(){
    displayTimer.innerHTML="00s"
    stopper=true
    hr = 0
    sec = 0
    min = 0
})
function timer(){
    if(stopper==false){

        sec = parseInt(sec)
        min = parseInt(min)
        hr = parseInt(hr)

        sec+=1

        if(sec==60){
            min+=1
            sec=0
        }
        if(min==60){
            hr+=1
            min=0
            sec=0
        }
        if(sec<10){
            sec='0'+sec
        }
        if(min<10){
            min='0'+min
        }
        if(hr<10){
            hr='0'+hr
        }

        if(sec>0){
            displayTimer.innerHTML=sec+'s'
        }
        if(sec>0 && min>0){
            displayTimer.innerHTML=min+'m '+sec+'s'
        }
        if(sec>0 && min>0 && hr>0){
            displayTimer.innerHTML=hr+'h'+min+'m'+sec+'s'
        }


        // displayTimer.innerHTML=hr+'h'+min+'m'+sec+'s'
        setTimeout('timer()',1000)
        
    }
}