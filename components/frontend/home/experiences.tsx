'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Experience {
    title: string;
    company: string;
    companyColor: string;
    duration: string;
    description: string;
    technologies?: string[];
}

const experienceData: Experience[] = [
    {
        title: "Software Engineer",
        company: "Soft BD Ltd",
        companyColor: "text-blue-600",
        duration: "Feb 2025 - Present",
        description: "Supported team growth through effective knowledge sharing and mentoring of junior developers, promoting coding standards, collaborative development, and technical consistency.",
        technologies: ["Team Leadership", "Mentoring", "Code Review"]
    },
    {
        title: "Assistant Software Engineer",
        company: "Soft BD Ltd",
        companyColor: "text-blue-600",
        duration: "Dec 2022 - Jan 2025",
        description: "Contributed to the development of a scalable Enterprise Management System (Education Management System) used by large institutions and government entities, implementing admission management, RBAC, secure payment integrations, and data-driven reporting features.",
        technologies: ["CakePHP", "Vue.js", "MySQL", "RBAC", "Payment Gateways"]
    },
    {
        title: "Software Engineer",
        company: "OTITHEE Limited",
        companyColor: "text-purple-600",
        duration: "Mar 2022 - Nov 2022",
        description: "Played a key role in building and maintaining internal business solutions, including a training management platform, an agent commission distribution system, and the News Portal, supporting operational efficiency and digital content delivery.",
        technologies: ["Laravel", "News Portal", "Business Solutions"]
    },
    {
        title: "Junior Web Application Developer",
        company: "One Point IT Solutions",
        companyColor: "text-green-600",
        duration: "Oct 2021 - Feb 2022",
        description: "Developed and maintained customized POS solutions, courier tracking systems, Somity management platforms, and MLM applications using Laravel and CodeIgniter, tailored to organizational requirements and operational workflows.",
        technologies: ["Laravel", "CodeIgniter", "POS", "MLM"]
    },
    {
        title: "Junior Web Application Developer",
        company: "Host Rare Limited",
        companyColor: "text-orange-600",
        duration: "Sep 2020 - Aug 2021",
        description: "Contributed to the development and maintenance of customized billing and e-commerce systems using Laravel, ensuring system stability and efficient transaction processing.",
        technologies: ["Laravel", "E-commerce", "Billing Systems"]
    }
];

export default function Experiences() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="experience" className="px-4 z-10 mb-20 overflow-hidden">
            <div className="grid grid-cols-1 gap-2 text-center">
                <h1
                    ref={ref}
                    className={`transition-all font-bold md:text-4xl text-gray-700 mb-16 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Professional Experience
                </h1>
            </div>

            <div className="relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 rounded-full" />

                {/* Mobile timeline line */}
                <div className="md:hidden absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 rounded-full" />

                {experienceData.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                ))}
            </div>
        </section>
    );
}

// Separate component for each experience card with its own scroll reveal
function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-start transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Timeline dot - mobile position */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-white border-4 border-amber-400 rounded-full shadow-lg ring-4 ring-white" />
            </div>

            {/* Experience card - full width on mobile */}
            <div
                className={`w-full ml-10 md:ml-0 md:w-5/12 bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-8' : 'md:ml-auto md:text-left md:pl-8'
                    }`}
            >
                {/* Duration badge */}
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {exp.duration}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    {exp.title}
                </h3>
                <p className={`font-semibold ${exp.companyColor} mb-2`}>
                    {exp.company}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {exp.description}
                </p>

                {/* Technologies */}
                {exp.technologies && (
                    <div className={`flex flex-wrap gap-2 justify-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
