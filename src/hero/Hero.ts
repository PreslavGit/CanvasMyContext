import { drawBoard } from "../global/board"

export class Hero {
    private color: string
    private size: number
    private x: number = 0
    private y: number = 0
    private ctx: CanvasRenderingContext2D

    constructor(color: string, size: number, ctx: CanvasRenderingContext2D) {
        this.color = color
        this.size = size
        this.ctx = ctx
        this.initialDraw()
        this.moveListener()
    }

    private initialDraw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    private move(key: string, moveBy = 1) {
        switch (key) {
            case 's':
                this.draw(this.x, this.y + moveBy)
                break;
            case 'a':
                this.draw(this.x - moveBy, this.y)
                break;
            case 'd':
                this.draw(this.x + moveBy, this.y)
                break;
            case 'w':
                this.draw(this.x, this.y - moveBy)
                break;
        }
    }

    private draw(x: number, y: number) {
        this.x = x
        this.y = y
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    private moveListener() {
        let intervalId: number | undefined
        const allowedKeys = ['a', 's', 'd', 'w']
        let lastKey = ''
        window.addEventListener('keydown', (e) => {
            clearInterval(intervalId)
            intervalId = undefined
            if (allowedKeys.includes(e.key)) {
                lastKey = e.key
                if (!intervalId) {
                    intervalId = setInterval(() => {
                        drawBoard(this.ctx)
                        this.move(e.key)
                    }, 1000 / 200)
                }
            }
            window.addEventListener('keyup', ({ key }) => {
                if (key === lastKey) { clearInterval(intervalId) }
            })
        })
    }
}