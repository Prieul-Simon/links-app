export type IconType = 
    | 'instagram'
    | 'bluesky'
    | 'github'
    | 'linkedin'
    | 'chess'
    | 'mywebpage'
    | 'myresume'
    | 'sendmeanemail'
    | 'buymeacoffee'
    

export function computeFontAwesome(icon: IconType): string {
    switch (icon) {
        case 'bluesky': return 'fa-brands fa-bluesky'
        case 'instagram': return 'fa-brands fa-instagram'
        case 'github': return 'fa-brands fa-github'
        case 'linkedin': return 'fa-brands fa-linkedin'
        case 'chess': return getRandomIconForChess()
        case 'mywebpage': return 'fa-solid fa-globe'
        case 'myresume': return 'fa-solid fa-id-card'
        case 'sendmeanemail': return 'fa-regular fa-envelope'
        case 'buymeacoffee': return 'fa-solid fa-mug-hot'
        default: return 'fa-solid fa-circle-question'
    }
}

function getRandomIconForChess(): string {
    const defaultOne = 'fa-solid fa-chess-knight'
    if (import.meta.env.SSR) return defaultOne
    
    const randomIndex = Math.floor(Math.random() * 3)
    return [
        'fa-solid fa-chess',
        defaultOne,
        'fa-solid fa-chess-bishop',
    ][randomIndex] ?? 'fa-solid fa-circle-question'
}