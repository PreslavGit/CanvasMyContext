import { direction } from "../types"

export class Hero{
    color: string
    size: number
    x: number = 0
    y: number = 0
    ctx: CanvasRenderingContext2D

    constructor(color: string, size: number, ctx: CanvasRenderingContext2D){
        this.color = color 
        this.size = size
        this.ctx = ctx
        this.initialDraw(this.ctx)
    }

    private initialDraw(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    move(direction: direction, moveBy: number){
        switch (direction) {
            case 'down':
                this.draw(this.x, this.y + moveBy)
                break;
            case 'left':
                this.draw(this.x - moveBy, this.y)                
                break;
            case 'right': 
                this.draw(this.x + moveBy, this.y)
                break;
            case 'up':
                this.draw(this.x, this.y - moveBy)
                break;
            default:
                break;
        }
    }

    private draw(x: number, y: number){
        this.x = x
        this.y = y
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}