import { Hero } from "./hero/Hero"

const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

const squareNum = 20
const squareSize = canvas.height / squareNum

drawBoard()

const hero = new Hero("red", 10, ctx)

window.addEventListener('keydown', (e) => {
    drawBoard()
    hero.moveEventHandler(e)
})

function drawBoard(){
    let color = 'green'
    for (let i = 0; i < squareNum; i++) {
        color = color === 'green' ? color = 'darkgreen' : 'green'
        for (let j = 0; j < squareNum; j++) {
            color = color === 'green' ? color = 'darkgreen' : 'green'
            ctx.fillStyle = color
            ctx.fillRect(i*squareSize, j*squareSize, squareSize, squareSize)
        }
    }
}

export { }