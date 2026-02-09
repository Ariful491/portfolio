'use client'

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
    title: string;
    subtitle: string;
    description: string;
    impact: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    image: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: "EMS (AALO)",
        subtitle: "Admission & Academic Management Module",
        description: "Designed and implemented a comprehensive Admission Management Module supporting both regular admissions and event-based payment workflows. Developed semi-dynamic admission forms enabling institution-specific customization and flexible data collection.",
        impact: "250+ educational institutions across Bangladesh",
        technologies: ["CakePHP", "jQuery", "Bootstrap 5", "Firebase", "MySQL", "JWT"],
        liveUrl: "https://www.ems.gccc.edu.bd/events",
        image: "/placeholder-ems.jpg",
        featured: true
    },
    {
        title: "NPF (National Portal Framework)",
        subtitle: "Government Content Management System",
        description: "Ensured timely dissemination of critical public information, including emergency alerts and election-related updates. Developed a centralized content management system supporting 3,000+ government websites.",
        impact: "3,000+ government websites",
        technologies: ["NestJS", "Next.js", "MongoDB", "Material UI"],
        liveUrl: "#",
        image: "/placeholder-npf.jpg",
        featured: true
    },
    {
        title: "JudiPay",
        subtitle: "Court Management Module",
        description: "Developed and maintained Court Type & Suit Type modules with role-based access control (RBAC) and dynamic suit form validation to ensure secure and accurate judicial data management.",
        impact: "Secure judicial data management",
        technologies: ["Vue.js", "Element UI", "Laravel", "MySQL"],
        liveUrl: "#",
        image: "/placeholder-judipay.jpg",
        featured: true
    },
    {
        title: "PMS (Portal Management System)",
        subtitle: "NPF Portal Lifecycle Manager",
        description: "A centralized system designed to manage the NPF portal lifecycle. It facilitates new domain portal applications, approval workflows, and decision-making processes to either publish portals live or reject submissions.",
        impact: "Governance across departments",
        technologies: ["Laravel", "jQuery", "Bootstrap 5"],
        liveUrl: "#",
        image: "/placeholder-pms.jpg"
    },
    {
        title: "Smart Job",
        subtitle: "Government Job Portal",
        description: "The system supports simultaneous posting of multiple government job circulars from different divisions, ensuring timely and coordinated publication nationwide with exam scheduling and applicant tracking.",
        impact: "Nationwide job distribution",
        technologies: ["Laravel", "jQuery", "Bootstrap 5"],
        liveUrl: "#",
        image: "/placeholder-smartjob.jpg"
    },
    {
        title: "ARBITBD",
        subtitle: "E-commerce Platform",
        description: "Full-featured e-commerce platform with product management, shopping cart, secure checkout, and order tracking capabilities.",
        impact: "Complete e-commerce solution",
        technologies: ["Vue.js", "Laravel", "MySQL"],
        liveUrl: "#",
        image: "/placeholder-arbitbd.jpg"
    }
];

export default function Projects() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="projects" className="px-4 z-10 mb-40 overflow-hidden">
            <div className="grid grid-cols-1 gap-2 text-center">
                <h1
                    ref={ref}
                    className={`transition-all font-bold md:text-4xl text-gray-700 mb-6 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Professional Projects
                </h1>
                <p className={`text-gray-500 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
                    }`}>
                    A selection of projects I&apos;ve contributed to, showcasing full-stack development expertise
                </p>
            </div>

            {/* Featured Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {/* Additional Projects Link */}
            <div className="text-center mt-12">
                <a
                    href="https://github.com/ariful"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors font-medium"
                >
                    <Github className="w-5 h-5" />
                    View more on GitHub
                </a>
            </div>
        </section>
    );
}

// Separate component for each project card with its own scroll reveal
function ProjectCard({ project }: { project: Project }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                } ${project.featured ? 'ring-2 ring-amber-200' : ''}`}
        >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-amber-300/50">
                        {project.title.charAt(0)}
                    </div>
                </div>
                {project.featured && (
                    <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                    </span>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full hover:bg-amber-500 hover:text-white transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full hover:bg-gray-800 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {project.title}
                </h3>
                <p className="text-amber-600 font-medium text-sm mb-3">
                    {project.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Impact Badge */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        {project.impact}
                    </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md hover:bg-amber-100 hover:text-amber-700 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs text-gray-400">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
