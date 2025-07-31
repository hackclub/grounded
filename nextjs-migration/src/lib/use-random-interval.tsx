// https://github.com/hackclub/site/blob/main/lib/use-random-interval.js
// Full credit to https://joshwcomeau.com/snippets/react-hooks/use-random-interval
import React from 'react'

// Utility helper for random number generation
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min

const useRandomInterval = (callback: () => void, minDelay: number | null, maxDelay: number | null) => {
    const timeoutId = React.useRef<number | null>(null)
    const savedCallback = React.useRef(callback)
    React.useEffect(() => {
        savedCallback.current = callback
    })
    React.useEffect(() => {
        const isEnabled = typeof minDelay === 'number' && typeof maxDelay === 'number'
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(minDelay as number, maxDelay as number)
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current()
                    handleTick()
                }, nextTickAt)
            }
            handleTick()
        }
        return () => window.clearTimeout(timeoutId.current as number)
    }, [minDelay, maxDelay])
    const cancel = React.useCallback(function () {
        window.clearTimeout(timeoutId.current as number)
    }, [])
    return cancel
}

export default useRandomInterval