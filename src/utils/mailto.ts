export function openDecodedMailto(encodedMailto: string): (() => undefined) {
    return () => {
        const decoded = decodeMailto(encodedMailto)
        window.open(decoded, '_blank')
        return undefined
    }
}

function decodeMailto(src: string): string {
    const start = 'mailto:'
    const after = '?'
    const endIndex = src.indexOf(after)
    const encodedAddress = endIndex > -1 ? src.substring(start.length, endIndex) : src.substring(start.length)
     // Mail is double encoded if a bot is smart and tries to decode once !
    const decoded = atob(atob(encodedAddress))
    return `${start}${decoded}${endIndex > -1 ? src.substring(endIndex) : ''}`
}
