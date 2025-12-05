
const diceOne = document.getElementById("img1")
const diceTwo = document.getElementById("img2")
const veiw = document.getElementById("result")
const start = document.getElementById("start")
const count = document.getElementById("count")
const rollDice = document.getElementById("rollDice")

rollDice.addEventListener("click", () => {

   
    diceOne.src = `./images/dice${Math.floor(Math.random() * 6) + 1}.png`
    diceTwo.src = `./images/dice${Math.floor(Math.random() * 6) + 1}.png`

    const PlayerOne = diceOne.src
    const playerTwo = diceTwo.src



    if (PlayerOne > playerTwo) {
        veiw.innerText = "Player 1 as WIN"
        // console.log(alert("Player 1 as WIN"))
    }
    else if (PlayerOne < playerTwo) {
        veiw.innerText = "Player 2 as Win"
        // console.log(alert("Player 2 as WIN"))
    }
    else {
        veiw.innerText = "Match Draw"
    }
})


start.addEventListener("click", () => {
    start.style.display = "none";
    

    let timeLeft = 4;
    count.innertext = timeLeft

    const timer = setInterval(() => {
        timeLeft--;

        if (timeLeft > 0) {
            count.textContent = timeLeft
        }

        else {
            clearInterval(timer)
            count.textContent = "GO!"

            setTimeout(() => {
                count.style.display = "none"
                rollDice.style.display="block"
                

            }, 1000)
        }

    }, 1000)
})


