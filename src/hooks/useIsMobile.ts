'use client'
import { useState, useEffect } from 'react'

const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800)
        }

        if (typeof window !== 'undefined') {
            // Client-side-only code
            handleResize() // Call initially to set the state based on current window width
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile
}

export default useIsMobile
