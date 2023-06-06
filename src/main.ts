import { Hero } from "./hero/Hero"

const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
            hero.move('left', 5)
            break;
        case 'w':
            hero.move('up', 5)
            break;
        case 's':
            hero.move('down', 5)
            break;
        case 'd':
            hero.move('right', 5)
            break;
        default:
            break;
    }
})
const squareNum = 20
const squareSize = canvas.height / squareNum

let color = 'green'
for (let i = 0; i < squareNum; i++) {
    color = color === 'green' ? color = 'darkgreen' : 'green'
    for (let j = 0; j < squareNum; j++) {
        color = color === 'green' ? color = 'darkgreen' : 'green'
        drawSquare(i * squareSize, j * squareSize, squareSize, color)
    }
}

const hero = new Hero("red", 10, ctx)
hero.move('right', 10)

function drawSquare(x: number, y: number, size: number, color: string) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
}

export { }