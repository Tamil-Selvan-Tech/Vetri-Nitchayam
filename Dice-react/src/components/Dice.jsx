import React, { useState } from 'react'

const Dice = () => {

    const [roll1, setRoll1] = useState("dice1.png")
    const [roll2, setRoll2] = useState("dice1.png")
    const [result1, setResult1] = useState("")
    const [result2, setResult2] = useState("")


    function handClick() {
        const rollDice1 = `dice${Math.floor(Math.random() * 6) + 1}.png`
        const rollDice2 = `dice${Math.floor(Math.random() * 6) + 1}.png`
        setRoll1(rollDice1)
        setRoll2(rollDice2)

        setResult1(
            rollDice1 === rollDice2
                ? "Match Draw"
                : rollDice1 > rollDice2
                    ? "Player 1 As win "
                    : ""

        )
        setResult2(
            rollDice1 === rollDice2
                ? "Match Draw"
                : rollDice1 < rollDice2
                    ? "Player 2 As Win"
                    : ""
        )
    }


    return (
        <>
            <div className='flex flex-col h-130 items-center justify-center bg-black text-white '>
                <div className=' flex flex-col items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold uppercase p-3'>Dice Game</h1>
                        <h1 className='text-xl font-bold'></h1>
                    </div>
                    <div className=' flex items-center justify-center gap-4 text-center text-xl font-medium uppercase ' >

                        <div>
                            <h1 className='m-1 text-yellow-300'>{result1}</h1>
                            <img src={roll1} alt="" className='h-45 w-45' />
                            <h1 className=''>Player 1</h1>
                        </div>
                        <div>
                            <h1 className='m-1 text-yellow-300'>{result2}</h1>     
                            <img src={roll2} alt="" className='h-45 w-45' />
                            <h1>Player 2</h1>
                        </div>
                    </div>
                    <div >
                        <button onClick={handClick}
                            className='  p-2 text-center rounded-xl m-1 text-xl font-bold
                             bg-yellow-400 text-black cursor-pointer outline-none'
                        >Roll Dice</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dice