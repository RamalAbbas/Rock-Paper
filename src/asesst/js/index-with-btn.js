let pointMe = document.querySelector("#point-me")
let pointPc = document.querySelector("#point-pc")
let player1Img = document.querySelector("#player1-img")
let player2Img = document.querySelector("#player2-img")
let player1ImgName = document.querySelector("#player1-img-name")
let player2ImgName = document.querySelector("#player2-img-name")
let player1Status = document.querySelector("#player1-status")
let player2Status = document.querySelector("#player2-status")

let arr = ["p","s","r"]
let countMe = 0
let countPc = 0

function randomFunction(key){
    let random = Math.floor(Math.random() * arr.length) 
    let arrRandomElement = arr[random]

    player2Img.src = `./src/asesst/images/${arrRandomElement}.png`

    if(arrRandomElement == "p"){
        player2ImgName.innerHTML = "Paper"
    }else if(arrRandomElement == "r"){
        player2ImgName.innerHTML = "Rock"
    }else{
        player2ImgName.innerHTML = "Scissors"
    }

    if(key == "p" && arrRandomElement == "r" || key == "s" && arrRandomElement == "p" || key == "r" && arrRandomElement == "s"){
        countMe++
        pointMe.innerHTML = countMe
        player1Status.innerHTML = "WIN"
        player2Status.innerHTML = "LOSE"

        player1Status.classList.add('text-success')
        player2Status.classList.remove('text-success')

        player1Status.classList.remove('text-danger')
        player2Status.classList.add('text-danger')

        player1Status.classList.remove('text-secondary')
        player2Status.classList.remove('text-secondary')
    }else if(key == "p" && arrRandomElement == "p" || key == "s" && arrRandomElement == "s" || key == "r" && arrRandomElement == "r"){
        player1Status.innerHTML = "DRAF"
        player2Status.innerHTML = "DRAF"

        player1Status.classList.add('text-secondary')
        player2Status.classList.add('text-secondary')

        player1Status.classList.remove('text-success')
        player2Status.classList.remove('text-success')

        player1Status.classList.remove('text-danger')
        player2Status.classList.remove('text-danger')
    }else{
        countPc++
        pointPc.innerHTML = countPc
        player2Status.innerHTML = "WIN",
        player1Status.innerHTML = "LOSE"
        
        player1Status.classList.remove('text-success')
        player2Status.classList.add('text-success')

        player1Status.classList.add('text-danger')
        player2Status.classList.remove('text-danger')

        player1Status.classList.remove('text-secondary')
        player2Status.classList.remove('text-secondary')
    }
}

let rockBtn = document.querySelector("#rockBtn")
let paperBtn = document.querySelector("#paperBtn")
let scissorsBtn = document.querySelector("#scissorsBtn")
console.log({scissorsBtn});

rockBtn.addEventListener("click",function(){
    rockBtn = "r"
    if(rockBtn === "r"){
        player1Img.src = './src/asesst/images/r.png'
        player1ImgName.innerHTML = "Rock"
        randomFunction(rockBtn)
    }
})

paperBtn.addEventListener("click",function(){
    paperBtn = "p"
    if(paperBtn === "p"){
        player1Img.src = './src/asesst/images/p.png'
        player1ImgName.innerHTML = "Paper"
        randomFunction(paperBtn)
    }
})

scissorsBtn.addEventListener("click",function(){
    scissorsBtn = "s"
    if(scissorsBtn === "s"){
        player1Img.src = './src/asesst/images/s.png'
        player1ImgName.innerHTML = "Scissors"
        randomFunction(scissorsBtn)
    }
})