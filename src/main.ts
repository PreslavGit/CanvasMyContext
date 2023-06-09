import { drawBoard } from "./global/board"
import { Hero } from "./hero/Hero"

const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
const squareNum = 20
const squareSize = canvas.height / squareNum
drawBoard(ctx)

const hero = new Hero("red", 10, ctx)