import { Position } from "../types";
import { Entity } from "./Entity.interface";

export class Projectile implements Entity{
    private startPos: Position
    private endPos: Position
    private ctx: CanvasRenderingContext2D
    private size: number
    private color: string
    private currPos: Position = {x: -10, y: -10}

    constructor(startPos: Position, endPos: Position, ctx: CanvasRenderingContext2D, size = 5, color = 'black'){
        this.startPos = startPos
        this.endPos = endPos
        this.ctx = ctx
        this.size = size
        this.color = color
    }

    public render(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.currPos.x, this.currPos.y, this.size, this.size) 
    }

    public getPath(){
        return this.genPath()
    }

    public shoot(){
        const path = this.getPath()
        path.push({x: -10, y: -10})
        let i = 0;
        const intervalId  = setInterval(() => {
            this.moveto(path[i++])
            if(i === path.length){clearInterval(intervalId)}
        }, 10)
    }

    private moveto(pos: Position, color = 'black'){
        this.ctx.fillStyle = color
        this.ctx.fillRect(pos.x, pos.y, this.size, this.size)
        this.currPos = pos
    }

    private genPath(steps = 50){
        const path: Position[] = []
        const xsign = this.startPos.x - this.endPos.x > 0 ? -1 : 1
        const ysign = this.startPos.y - this.endPos.y > 0 ? -1 : 1
        const xdiff = Math.abs(this.startPos.x - this.endPos.x)
        const ydiff = Math.abs(this.startPos.y - this.endPos.y)
        for (let i = 1; i <= steps; i++) {
            path.push({
                x: this.startPos.x+xdiff/steps*i*xsign,
                y: this.startPos.y+ydiff/steps*i*ysign
            })            
        }
        return path
    }
}