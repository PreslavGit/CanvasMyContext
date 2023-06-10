const directions = [
    'left',
    'right',
    'up',
    'down'
] as const

export type directions = typeof directions[number]

export const moveKeys = ['a', 's', 'd', 'w']

export type Position = {
    x: number,
    y: number
}