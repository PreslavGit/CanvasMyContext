export function drawBoard(ctx: CanvasRenderingContext2D, squareNum = 20, squareSize = 600/squareNum){
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