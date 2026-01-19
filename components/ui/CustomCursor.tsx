"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const glow = glowRef.current
        if (!cursor || !glow) return

        let x = 0, y = 0
        let cx = 0, cy = 0

        const move = (e: MouseEvent) => {
            x = e.clientX
            y = e.clientY
        }

        const animate = () => {
            cx += (x - cx) * 0.2
            cy += (y - cy) * 0.2

            cursor.style.transform = `translate(${cx - 6}px, ${cy - 6}px)`
            glow.style.transform = `translate(${cx - 90}px, ${cy - 90}px)`

            requestAnimationFrame(animate)
        }

        // 👉 hover detection
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest("a, button, [role='button']")) {
                cursor.classList.add("cursor-pointer-active")
            }
        }

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest("a, button, [role='button']")) {
                cursor.classList.remove("cursor-pointer-active")
            }
        }

        window.addEventListener("mousemove", move)
        document.addEventListener("mouseover", onMouseOver)
        document.addEventListener("mouseout", onMouseOut)

        animate()

        return () => {
            window.removeEventListener("mousemove", move)
            document.removeEventListener("mouseover", onMouseOver)
            document.removeEventListener("mouseout", onMouseOut)
        }
    }, [])

    return (
        <>
            {/* Glow */}
            <div
                ref={glowRef}
                className="fixed top-0 left-0 w-[180px] h-[180px]
                   pointer-events-none z-[9998]
                   blur-3xl opacity-80"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 75%)",
                }}
            />

            {/* Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8
                   rounded-full bg-transparent border-4 border-amber-500
                   pointer-events-none z-[9999]
                   transition-all duration-150"
            />
        </>
    )
}
