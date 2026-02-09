'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Education {
    degree: string;
    field: string;
    institution: string;
    year: string;
    cgpa: string;
    icon: string;
}

const educationData: Education[] = [
    {
        degree: "Masters of Science",
        field: "Professional Computer Science",
        institution: "Jahangirnagar University",
        year: "2023",
        cgpa: "3.75",
        icon: "🎓"
    },
    {
        degree: "Bachelor of Science",
        field: "Computer Science & Engineering",
        institution: "Manarat International University",
        year: "2020",
        cgpa: "3.50",
        icon: "🎓"
    },
    {
        degree: "Higher Secondary Certificate",
        field: "Science",
        institution: "Shaheed Police Smrity College",
        year: "2014",
        cgpa: "4.60",
        icon: "📚"
    },
    {
        degree: "Secondary School Certificate",
        field: "Science",
        institution: "Gharmora A.K.M Fazlul Hoque Mollah High School",
        year: "2012",
        cgpa: "4.88",
        icon: "📚"
    }
];

export default function Education() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="education" className="px-4 z-10 mb-40 overflow-hidden">
            <div className="grid grid-cols-1 gap-2 text-center">
                <h1
                    ref={ref}
                    className={`transition-all font-bold md:text-4xl text-gray-700 mb-16 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Educational Background
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu, index) => (
                    <EducationCard key={index} edu={edu} />
                ))}
            </div>

            {/* Certifications */}
            <Certifications />
        </section>
    );
}

// Separate component for each education card with its own scroll reveal
function EducationCard({ edu }: { edu: Education }) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`group relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Year Badge */}
            <div className="absolute -top-3 -right-3 bg-amber-500 text-white font-bold px-4 py-2 rounded-full shadow-lg">
                {edu.year}
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4">{edu.icon}</div>

            {/* Degree */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">
                {edu.degree}
            </h3>
            <p className="text-amber-600 font-medium mb-2">
                {edu.field}
            </p>

            {/* Institution */}
            <p className="text-gray-600 text-sm mb-4">
                {edu.institution}
            </p>

            {/* CGPA */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">CGPA:</span>
                <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
                    {edu.cgpa}
                </span>
            </div>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
}

// Certifications section with its own scroll reveal
function Certifications() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div className="mt-16">
            <h2
                ref={ref}
                className={`text-2xl font-bold text-gray-700 text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                Certifications & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CertificationCard
                    icon="🏆"
                    title="Certificate of Excellence"
                    org="Soft BD Ltd"
                    date="January - June 2023"
                    gradient="from-amber-50 to-orange-50"
                    borderColor="border-amber-200"
                    orgColor="text-amber-600"
                />
                <CertificationCard
                    icon="📜"
                    title="Web Application Development - PHP"
                    org="BITM"
                    date="August - December 2019"
                    gradient="from-blue-50 to-indigo-50"
                    borderColor="border-blue-200"
                    orgColor="text-blue-600"
                />
            </div>
        </div>
    );
}

function CertificationCard({ icon, title, org, date, gradient, borderColor, orgColor }: {
    icon: string;
    title: string;
    org: string;
    date: string;
    gradient: string;
    borderColor: string;
    orgColor: string;
}) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`bg-gradient-to-r ${gradient} rounded-xl p-6 border ${borderColor} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="flex items-start gap-4">
                <span className="text-3xl">{icon}</span>
                <div>
                    <h4 className="font-bold text-gray-800">{title}</h4>
                    <p className={`${orgColor} text-sm`}>{org}</p>
                    <p className="text-gray-500 text-xs mt-1">{date}</p>
                </div>
            </div>
        </div>
    );
}
