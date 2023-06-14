import { Entity } from "./global/Entity.interface"
import { Projectile } from "./global/Projectile"
import { drawBoard } from "./global/board"
import { Hero } from "./hero/Hero"

const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
let entitiesList: Entity[] = []

const hero = new Hero("red", 10, ctx)
entitiesList.push(hero)

canvas.addEventListener('click', ({offsetX, offsetY}) => {
    const proj = new Projectile(hero.getPos(), {x: offsetX, y: offsetY}, ctx)
    entitiesList.push(proj)
    proj.shoot()    
})

const gameLoop = setInterval(() => {
    drawBoard(ctx)
    entitiesList.forEach(ent => {
        ent.render()
    })
}, 1000/60)