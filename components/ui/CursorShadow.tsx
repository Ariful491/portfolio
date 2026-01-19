"use client"

import { useEffect, useRef } from "react"

export default function CursorShadow() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        let x = 0, y = 0
        let cx = 0, cy = 0

        const move = (e: MouseEvent) => {
            x = e.clientX
            y = e.clientY
        }

        const animate = () => {
            cx += (x - cx) * 0.12
            cy += (y - cy) * 0.12
            el.style.transform = `translate(${cx - 90}px, ${cy - 90}px)`
            requestAnimationFrame(animate)
        }

        window.addEventListener("mousemove", move)
        animate()

        return () => window.removeEventListener("mousemove", move)
    }, [])

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-[180px] h-[180px]
             pointer-events-none z-[9999]
               opacity-90 blur-[60px]"
            style={{
                background:
                    "radial-gradient(circle, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 75%)",
            }}
        />
    )
}
