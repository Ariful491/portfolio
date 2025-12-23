"use client"

import React, {forwardRef, useRef} from "react"

import {cn} from "@/lib/utils"
import {AnimatedBeam} from "@/components/ui/animated-beam"
import {BrainIcon} from "lucide-react";

import {
    VueJsLogo,
    ReactLogo,
    LaravelLogo,
    CakePHPLogo,
    NuxtLogo,
    NextLogo,
    NestLogo,
    CodeIgniterLogo,
    BootstrapLogo, TailwindCssLogo

} from "@/components/ui/logos";


const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }
>(({className, children}, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full  bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    )
})

Circle.displayName = "Circle"

export function Animation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)
    const div3Ref = useRef<HTMLDivElement>(null)
    const div4Ref = useRef<HTMLDivElement>(null)
    const div5Ref = useRef<HTMLDivElement>(null)
    const div6Ref = useRef<HTMLDivElement>(null)
    const div7Ref = useRef<HTMLDivElement>(null)
    const div8Ref = useRef<HTMLDivElement>(null)
    const div9Ref = useRef<HTMLDivElement>(null)
    const div10Ref = useRef<HTMLDivElement>(null)
    const div11Ref = useRef<HTMLDivElement>(null)

    return (
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}>
            <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        <VueJsLogo/>
                    </Circle>
                    <Circle ref={div5Ref}>
                        <TailwindCssLogo/>
                    </Circle>
                    <Circle ref={div10Ref}>
                        <BootstrapLogo/>
                    </Circle>
                    <Circle ref={div11Ref}>
                        <ReactLogo/>
                    </Circle>

                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref}>
                        <NuxtLogo/>
                    </Circle>
                    <Circle ref={div4Ref} className="size-16">
                        <BrainIcon></BrainIcon>
                    </Circle>
                    <Circle ref={div6Ref}>
                        <NextLogo/>
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div3Ref}>
                        <CakePHPLogo/>
                    </Circle>
                    <Circle ref={div7Ref}>

                        <LaravelLogo/>
                    </Circle>
                    <Circle ref={div8Ref}>
                        <NestLogo/>
                    </Circle>
                    <Circle ref={div9Ref}>
                        <CodeIgniterLogo/>
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div10Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div11Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div8Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div9Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    )
}

