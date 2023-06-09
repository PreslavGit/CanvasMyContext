const directions = [
    'left',
    'right',
    'up',
    'down'
] as const

export type directions = typeof directions[number]