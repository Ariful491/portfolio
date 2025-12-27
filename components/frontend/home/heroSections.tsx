"use client"

import {HyperText} from "@/components/ui/hyper-text";
import {DownloadCircle} from "iconoir-react/regular";
import Image from "next/image";
import ProImage from "@/public/proffessiona.png";
import {Marquee} from "@/components/ui/marquee";
import MarqueeIconBox from "@/components/frontend/marqueeIconBox";
import {useEffect, useRef} from "react";
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
import {BorderBeam} from "@/components/ui/border-beam";

export default function HeroSections() {

    const tiltRef = useRef(null);

    useEffect(() => {
        const el = tiltRef.current;

        const SIDEBAR_WIDTH = 300;

        const handleMove = (e) => {
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
            }


        }

    return (
        <>
            <div className="px-4 z-10 overflow-hidden">
                <div className="grid grid-cols-3 gap-2 text-center h-screen">
                    <div className=" p-4  relative col-span-2 justify-center flex items-center">
                        <div className="">
                            <h1 className="md:text-4xl font-bold animate-fade-up  duration-1000   animate-ease-in-out  animate-once ">
                                <HyperText animateOnHover={false} style={{
                                    letterSpacing: "5px", fontSize: "3rem",
                                    fontFamily: "monospace",
                                    textTransform: "capitalize !important",
                                }}> Ariful Hoque</HyperText>
                            </h1>
                            <p className="animate-fade-up    duration-1000  text-2xl mt-2  animate-ease-in-out  animate-once  text-gray-500">
                                Full Stack Developer
                            </p>
                            <div className="mt-5 fa">
                                <button
                                    className="relative  bg-linear-to-bl from-white to-white drop-shadow-gray-100 shadow-2xl   hover:from-amber-500 hover:to-amber-100 hover:shadow-lg hover:px-10 hover:text-white  transition-all   py-3 px-6 font-bold text-2xl  rounded-full ">

                                   <span className="flex    items-center gap-4">

                                   Download CV
                                        <DownloadCircle className="h-6  w-6"/>
                                   </span>

                                    <BorderBeam
                                        duration={2} size={95}
                                        className="from-transparent via-amber-600 to-transparent"
                                    />

                                </button>
                            </div>


                        </div>
                    </div>
                    <div ref={tiltRef} className=" relative  p-4  items-center  justify-center flex">
                      <span className="absolute top-0 left-0 rounded-full
                        h-64 w-64  bg-gradient-to-r blur-3xl from-white via-red-400 to-red-50 opacity-75">

                        </span>


                        <Image src={ProImage} className=" mx-auto fade-up rounded-xl   drop-shadow-2xl   my-auto" alt=""
                               priority={true}/>
                        <div>
                            <div
                                className="absolute top-1/12 left-1/2 w-4 h-4  bg-transparent border-2 border-[#18141e] rounded-full  circle-motion"></div>
                            <div
                                className="absolute bottom-1/6 left-1/5 w-4 h-4 bg-transparent border-2 border-amber-400 rounded-full circle-motion"></div>
                        </div>

                    </div>
                    <div className=" grid    text-center">
                        <div className="   w-full   text-center">
                            <Marquee pauseOnHover={true}>
                                {
                                    Object.entries(skills).map(([key, skill], index) => (
                                        <MarqueeIconBox key={index}>
                                            <Image src={skill.src} alt={skill.alt} className="h-10 p-2 w-10"/>
                                            <span
                                                className="text-xl p-1 font-bold text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                        </MarqueeIconBox>
                                    ))
                                }

                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}