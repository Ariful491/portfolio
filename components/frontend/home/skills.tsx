'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

// Import skill logos
import laravel from "@/public/laravel.svg";
import ReactLogo from "@/public/React.svg";
import nextLogo from "@/public/Next.js.svg";
import BootstrapLogo from "@/public/Bootstrap.svg";
import CakePHPLogo from "@/public/CakePHP.svg";
import CodeIgniterLogo from "@/public/CodeIgniter.svg";
import JavaScriptLogo from "@/public/JavaScript.svg";
import JqueryLogo from "@/public/jQuery.svg";
import TailwindLogo from "@/public/Tailwind CSS.svg";
import MySQLLogo from "@/public/SQL Developer.svg";
import PHPLogo from "@/public/PHP.svg";
import VueLogo from "@/public/Vue.js.svg";
import NuxtLogo from "@/public/Nuxt JS.svg";
import NestLogo from "@/public/nest.svg";
import RedisLogo from "@/public/Redis.svg";

interface Skill {
    name: string;
    logo?: any;
    level: number;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Backend Development",
        skills: [
            { name: "Laravel", logo: laravel, level: 5 },
            { name: "CakePHP", logo: CakePHPLogo, level: 5 },
            { name: "CodeIgniter", logo: CodeIgniterLogo, level: 5 },
            { name: "PHP (OOP)", logo: PHPLogo, level: 5 },
            { name: "NestJS", logo: NestLogo, level: 4 },
            { name: "Rest API", level: 5 }
        ]
    },
    {
        name: "Frontend Development",
        skills: [
            { name: "Vue.js", logo: VueLogo, level: 5 },
            { name: "Nuxt.js", logo: NuxtLogo, level: 5 },
            { name: "React.js", logo: ReactLogo, level: 4 },
            { name: "Next.js", logo: nextLogo, level: 4 },
            { name: "Livewire", level: 4 },
            { name: "Inertia.js", level: 4 },
            { name: "JavaScript", logo: JavaScriptLogo, level: 5 },
            { name: "TypeScript", level: 4 },
            { name: "jQuery", logo: JqueryLogo, level: 5 }
        ]
    },
    {
        name: "Styling & UI",
        skills: [
            { name: "Tailwind CSS", logo: TailwindLogo, level: 5 },
            { name: "Bootstrap", logo: BootstrapLogo, level: 5 },
            { name: "Element UI", level: 5 },
            { name: "SCSS/CSS3", level: 5 },
            { name: "HTML5", level: 5 }
        ]
    },
    {
        name: "Database & DevOps",
        skills: [
            { name: "MySQL", logo: MySQLLogo, level: 5 },
            { name: "MongoDB", level: 4 },
            { name: "Docker", level: 3 },
            { name: "Git/GitHub", level: 5 },
            { name: "GitLab", level: 5 }
        ]
    },
    {
        name: "Tools & Others",
        skills: [
            { name: "Postman", level: 5 },
            { name: "KeyCloak (SSO)", level: 4 },
            { name: "WebSockets", level: 4 },
            { name: "Firebase", level: 4 },
            { name: "Click Up", level: 4 },
            { name: "Slack", level: 5 }
        ]
    }
];

export default function Skills() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="skills" className="px-4 z-10 mb-20 overflow-hidden">
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
                <p className={`text-gray-500 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
                    }`}>
                    3.5+ years of hands-on experience with modern web technologies
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skillCategories.map((category, catIndex) => (
                    <SkillCard key={catIndex} category={category} />
                ))}
            </div>
        </section>
    );
}

// Separate component for each skill card with its own scroll reveal
function SkillCard({ category }: { category: SkillCategory }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
        >
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                    <div
                        key={skillIndex}
                        className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-2 rounded-lg hover:bg-amber-50 hover:border-amber-200 transition-colors group"
                    >
                        {/* Logo */}
                        <div className="w-6 h-6 flex items-center justify-center">
                            {skill.logo ? (
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                                />
                            ) : (
                                <span className="text-xs font-bold text-gray-400 group-hover:text-amber-500">
                                    {skill.name.charAt(0)}
                                </span>
                            )}
                        </div>

                        {/* Skill name */}
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
