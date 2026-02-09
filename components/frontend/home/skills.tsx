'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

// Import skill logos
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
import RedisLogo from "@/public/Redis.svg";

interface SkillCategory {
    name: string;
    skills: {
        name: string;
        logo?: any;
        level: number; // 1-5
    }[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Backend Development",
        skills: [
            { name: "Laravel", logo: laravel, level: 5 },
            { name: "CakePHP", logo: CakePHPLogo, level: 5 },
            { name: "PHP", logo: PHPLogo, level: 5 },
            { name: "NestJS", logo: NestLogo, level: 4 },
            { name: "CodeIgniter", level: 4 }
        ]
    },
    {
        name: "Frontend Development",
        skills: [
            { name: "Vue.js", logo: VueLogo, level: 5 },
            { name: "React.js", logo: ReactLogo, level: 4 },
            { name: "Next.js", logo: nextLogo, level: 4 },
            { name: "Nuxt.js", logo: NuxtLogo, level: 4 },
            { name: "JavaScript", logo: JavaScriptLogo, level: 5 },
            { name: "jQuery", logo: JqueryLogo, level: 5 }
        ]
    },
    {
        name: "Styling & UI",
        skills: [
            { name: "Tailwind CSS", logo: TailwindLogo, level: 5 },
            { name: "Bootstrap", logo: BootstrapLogo, level: 5 },
            { name: "HTML/CSS", level: 5 }
        ]
    },
    {
        name: "Database & Tools",
        skills: [
            { name: "MySQL", logo: MySQLLogo, level: 5 },
            { name: "MongoDB", level: 4 },
            { name: "Redis", logo: RedisLogo, level: 3 },
            { name: "Docker", level: 3 },
            { name: "Git/GitHub", level: 5 }
        ]
    },
    {
        name: "Other Technologies",
        skills: [
            { name: "REST API", level: 5 },
            { name: "Firebase", level: 4 },
            { name: "JWT", level: 5 },
            { name: "WebSockets", level: 4 },
            { name: "KeyCloak (SSO)", level: 3 }
        ]
    }
];

export default function Skills() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="skills" className="px-4 z-10 mb-40 overflow-hidden">
            <div className="grid grid-cols-1 gap-2 text-center">
                <h1
                    ref={ref}
                    className={`transition-all font-bold md:text-4xl text-gray-700 mb-6 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Technical Skills
                </h1>
                <p className={`text-gray-500 mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}>
                    3.5+ years of hands-on experience with modern web technologies
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skillCategories.map((category, catIndex) => (
                    <div
                        key={catIndex}
                        ref={ref}
                        className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${isVisible
                            ? 'opacity-100 translate-y-0 animate-fade-up'
                            : 'opacity-0 translate-y-10'
                            }`}
                        style={{ animationDelay: `${catIndex * 100}ms` }}
                    >
                        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                            {category.name}
                        </h3>
                        <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex items-center gap-3">
                                    {/* Logo */}
                                    <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg">
                                        {skill.logo ? (
                                            <Image
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="w-5 h-5"
                                            />
                                        ) : (
                                            <span className="text-xs font-bold text-gray-400">
                                                {skill.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>

                                    {/* Skill name and level */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-gray-700">
                                                {skill.name}
                                            </span>
                                        </div>
                                        {/* Level indicator */}
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((level) => (
                                                <div
                                                    key={level}
                                                    className={`h-1.5 flex-1 rounded-full ${level <= skill.level
                                                        ? 'bg-amber-400'
                                                        : 'bg-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
