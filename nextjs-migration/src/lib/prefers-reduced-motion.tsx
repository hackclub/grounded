// https://github.com/hackclub/site/blob/main/lib/use-prefers-reduced-motion.js
// Full credit to https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion
import React from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'
const isRenderingOnServer = typeof window === 'undefined'

const getInitialState = () => {
    // For our initial server render, we won't know if the user
    // prefers reduced motion, but it doesn't matter. This value
    // will be overwritten on the client, before any animations
    // occur.
    return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}

function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] =
        React.useState(getInitialState)
    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY)
        const listener = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(!event.matches)
        }
        // Use the correct method based on browser support
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', listener)
        } else {
            // @ts-ignore - For older browsers
            mediaQueryList.addListener(listener)
        }
        return () => {
            if (mediaQueryList.removeEventListener) {
                mediaQueryList.removeEventListener('change', listener)
            } else {
                // @ts-ignore - For older browsers
                mediaQueryList.removeListener(listener)
            }
        }
    }, [])
    return prefersReducedMotion
}

export default usePrefersReducedMotion