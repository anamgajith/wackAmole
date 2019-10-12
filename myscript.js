var image = document.createElement('img')
image.src = 'mole.png'
let time
let hs = 0
let cs
let process 
let id

function begin(){
    id = Math.ceil(Math.random() * 9).toString()
    var plot = document.getElementById(id)
    plot.appendChild(image)
    time--
    document.getElementById('time-left').innerText = time
    if(time == 0){
        clearInterval(process)
        id = null
        if(cs > hs){
            hs = cs
            document.getElementById('high-score').innerText = hs
        }
        document.getElementById('green').disabled = false
    }
}

function start(){
    process = setInterval(begin,1000);
    document.getElementById('green').disabled = true
    time = 25
    cs = 0
    document.getElementById('current-score').innerText = cs
}

function clicked(cid){
    if(cid == id){
        cs++
        document.getElementById('current-score').innerText = cs
    }
}
