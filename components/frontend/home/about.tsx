'use client'

import { Animation } from "@/components/frontend/home/animation";
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
    const { ref, isVisible } = useScrollReveal();
    return (
        <>
            <section id="about" className="px-4 z-10 mb-20 overflow-hidden">
                <div className="grid grid-cols-1 gap-2 text-center">
                    <h1
                        ref={ref}
                        className={`transition-all font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-20 duration-1000 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0 animate-fade-up'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        About Me
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative text-gray-600 text-justify">
                    <div
                        ref={ref}
                        className={`bg-white backdrop-blur-md rounded-lg text-shadow-2xs md:-mr-15 z-10 align-middle my-auto p-4 md:p-6 duration-2000 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0 animate-fade animate-ease-in-out animate-normal'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <p className="text-base md:text-lg leading-relaxed">
                            Full-stack web developer with <span className="font-semibold text-amber-600">3.5+ years</span> of hands-on experience
                            building scalable, secure, and high-performance applications. Strong expertise in
                            <span className="font-semibold"> Laravel, CakePHP, and CodeIgniter</span>, with advanced frontend skills in
                            <span className="font-semibold"> Vue.js and Nuxt.js</span>.
                        </p>
                        <p className="mt-4 text-base md:text-lg leading-relaxed">
                            Specialized in <span className="text-amber-600 font-semibold">Education Management Systems (EMS)</span> and
                            government web applications, including legacy system modernization, payment gateway integration,
                            Firebase push notifications, and REST API development. Proficient in object-oriented programming,
                            database design, Agile workflows, and full application lifecycle management from requirement analysis
                            to deployment and long-term maintenance.
                        </p>
                    </div>

                    <div
                        ref={ref}
                        className={`bg-white rounded-lg m-0 md:m-4 justify-center align-middle my-auto p-6 duration-2500 ease-out ${isVisible
                            ? 'opacity-100 translate-y-0 animate-fade animate-ease-in-out animate-normal'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <Animation></Animation>
                    </div>
                </div>
            </section>
        </>
    )
}