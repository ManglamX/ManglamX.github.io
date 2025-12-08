"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CyberCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Smooth spring for the outer ring
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check for clickable elements
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')

            setIsHovering(!!isClickable)
        }

        const handleMouseOut = () => {
            setIsVisible(false)
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mouseover", handleMouseOver)
        document.addEventListener("mouseout", handleMouseOut)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("mouseout", handleMouseOut)
            document.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [cursorX, cursorY, isVisible])

    if (!isVisible) return null

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], input, textarea, select {
          cursor: none;
        }
      `}</style>

            {/* Center Dot - High precision, no lag */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div className={`w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] ${isClicking ? 'scale-75' : ''}`} />
            </motion.div>

            {/* Outer Reticle - Follows with delay/spring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Crosshair corners */}
                <div className="relative w-8 h-8 opacity-80">
                    <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary" />
                </div>
            </motion.div>

            {/* Trailing Data Text - Optional cool effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] text-[10px] font-mono text-primary/50 overflow-hidden whitespace-nowrap"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "20px",
                    translateY: "20px",
                }}
            >
                {isHovering && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        &lt;TARGET_LOCKED /&gt;
                    </motion.span>
                )}
            </motion.div>
        </>
    )
}
