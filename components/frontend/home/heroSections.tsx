"use client"

import { HyperText } from "@/components/ui/hyper-text";
import { Button } from "@/components/ui/button";
import { DownloadCircle } from "iconoir-react/regular";
import Image from "next/image";
import ProImage from "@/public/pp2.png";
import { Marquee } from "@/components/ui/marquee";
import MarqueeIconBox from "@/components/frontend/marqueeIconBox";
import { useEffect, useRef } from "react";
import laravel from "@/public/laravel.svg";
import ReactLogo from "@/public/React.svg";
import nextLogo from "@/public/Next.js.svg";
import BootstrapLogo from "@/public/Bootstrap.svg";
import CakePHPLogo from "@/public/CakePHP.svg";
import JavaScriptLogo from "@/public/JavaScript.svg";
import JqueryLogo from "@/public/jQuery.svg";
import TailwindLogo from "@/public/Tailwind CSS.svg";
import MySQLLogo from "@/public/SQL Developer.svg";
import PHPLogo from "@/public/PHP.svg";
import VueLogo from "@/public/Vue.js.svg";
import NuxtLogo from "@/public/Nuxt JS.svg";
import NestLogo from "@/public/nest.svg";
import { BorderBeam } from "@/components/ui/border-beam";

export default function HeroSections() {

    const tiltRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const el = tiltRef.current as HTMLDivElement;

        const SIDEBAR_WIDTH = 300;

        const handleMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            // --- sidebar ignore ---
            if (x < SIDEBAR_WIDTH) {
                el.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
                return;
            }
            // --- End sidebar check ---

            const midX = window.innerWidth / 2;
            const midY = window.innerHeight / 2;

            const rotateX = ((y - midY) / 20) * -1;
            const rotateY = (x - midX) / 20;

            el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        };

        const resetTilt = () => {
            el.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseout", resetTilt);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseout", resetTilt);
        };
    }, []);

    const skills =
    {
        laravel: {
            src: laravel,
            alt: "Laravel Logo"
        },
        react: {
            src: ReactLogo,
            alt: "React Logo"
        },
        nextjs: {
            src: nextLogo,
            alt: "Next.js Logo"
        },
        bootstrap: {
            src: BootstrapLogo,
            alt: "Bootstrap Logo"
        },
        cakephp: {
            src: CakePHPLogo,
            alt: "CakePHP Logo"
        },
        javascript: {
            src: JavaScriptLogo,
            alt: "JavaScript Logo"
        },
        jquery: {
            src: JqueryLogo,
            alt: "Jquery Logo"
        },
        tailwindcss: {
            src: TailwindLogo,
            alt: "Tailwind CSS Logo"
        },
        mysql: {
            src: MySQLLogo,
            alt: "MySQL Logo"
        },
        php: {
            src: PHPLogo,
            alt: "PHP Logo"
        },
        vuejs: {
            src: VueLogo,
            alt: "Vue.js Logo"
        },
        nuxtjs: {
            src: NuxtLogo,
            alt: "Nuxt.js Logo"
        },
        nestjs: {
            src: NestLogo,
            alt: "NestJS Logo"
        }
    }

    return (
        <>
            <div className="px-4 z-10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center min-h-screen py-20 lg:py-0 lg:h-screen">
                    <div className="p-4 relative lg:col-span-2 justify-center flex items-center order-2 lg:order-1">
                        <div className="">
                            <h1 className="font-bold animate-fade-up duration-1000 animate-ease-in-out animate-once text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-[3px] sm:tracking-[4px] md:tracking-[5px]">
                                <HyperText animateOnHover={false} className="font-mono capitalize">
                                    Ariful Hoque
                                </HyperText>
                            </h1>

                            <p className="animate-fade-up duration-1000 text-lg sm:text-xl md:text-2xl mt-2 animate-ease-in-out animate-once text-gray-500">
                                Full Stack Developer
                            </p>
                            <div className="mt-5 flex justify-center">
                                <Button
                                    className="relative bg-linear-to-bl from-white to-white drop-shadow-gray-100 shadow-2xl hover:from-amber-500 hover:to-amber-100 hover:shadow-lg transition-all py-6 px-6 text-base font-semibold sm:py-8 sm:px-8 sm:text-lg rounded-full text-gray-800 hover:text-white"
                                >
                                    <span className="flex items-center gap-2 sm:gap-3"> Download CV <DownloadCircle className="h-5 w-5 sm:h-6 sm:w-6" /></span>
                                    <BorderBeam duration={2} size={95} className="from-transparent via-amber-600 to-transparent" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div ref={tiltRef} className="relative p-4 items-center justify-center flex order-1 lg:order-2">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 rounded-full h-48 w-48 sm:h-64 sm:w-64 bg-gradient-to-r blur-3xl from-white via-red-400 to-red-50 opacity-75"></span>

                        <Image
                            src={ProImage}
                            alt="Ariful Hoque - Full Stack Developer"
                            priority
                            className="mx-auto rounded-xl my-auto relative w-48 sm:w-64 md:w-72 lg:w-auto max-w-xs"
                        />

                        <div className="hidden lg:block">
                            <div className="absolute top-1/12 left-1/2 w-4 h-4 bg-transparent border-2 border-[#18141e] rounded-full circle-motion"></div>
                            <div className="absolute bottom-1/6 left-1/5 w-4 h-4 bg-transparent border-2 border-amber-400 rounded-full circle-motion"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 order-3">
                        <div className="w-full text-center">
                            <Marquee pauseOnHover={true}>
                                {Object.entries(skills).map(([key, skill], index) => (
                                    <MarqueeIconBox key={index}>
                                        <Image src={skill.src} alt={skill.alt} className="h-8 w-8 sm:h-10 sm:w-10 p-1 sm:p-2" />
                                        <span className="text-sm sm:text-xl p-1 font-bold text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    </MarqueeIconBox>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}