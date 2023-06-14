import { Entity } from "../global/Entity.interface"
import { Position, moveKeys } from "../types"

export class Hero implements Entity{
    private color: string
    private size: number
    private currPos: Position = {x: 100, y: 100}
    private ctx: CanvasRenderingContext2D

    constructor(color: string, size: number, ctx: CanvasRenderingContext2D) {
        this.color = color
        this.size = size
        this.ctx = ctx
        this.draw()
        this.moveListener()
    }

    public getPos(): Position{ return { x: this.currPos.x + this.size/2, y: this.currPos.y + this.size/2 } }

    public render(){
        this.draw()
    }

    private draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.currPos.x, this.currPos.y, this.size, this.size)
    }

    private move(key: string, moveBy = 0.5) {
        if(key === 's'){ this.moveTo({x: this.currPos.x, y: this.currPos.y + moveBy}) }
        if(key === 'a'){ this.moveTo({x: this.currPos.x - moveBy, y: this.currPos.y}) }
        if(key === 'd'){ this.moveTo({x: this.currPos.x + moveBy, y: this.currPos.y}) }
        if(key === 'w'){ this.moveTo({x: this.currPos.x, y: this.currPos.y - moveBy}) }
    }

    private moveTo(pos: Position) {
        this.currPos = pos
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.currPos.x, this.currPos.y, this.size, this.size)
    }

    private moveListener() {
        let intervalId: number | undefined
        let lastKey = ''
        window.addEventListener('keydown', (e) => {
            clearInterval(intervalId)
            intervalId = undefined
            if (moveKeys.includes(e.key)) {
                lastKey = e.key
                if (!intervalId) {
                    intervalId = setInterval(() => {
                        this.move(e.key)
                    })
                }
            }
            window.addEventListener('keyup', ({ key }) => {
                if (key === lastKey) { 
                    clearInterval(intervalId) 
                }
            })
        })
    }
}