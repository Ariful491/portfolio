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
                    className={`transition-all font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-16 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Educational Background
                </h1>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            ref={ref}
                            className={`group relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible
                                ? 'opacity-100 translate-y-0 animate-fade-up'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Year Badge */}
                            <div className="absolute -top-3 -right-3 bg-amber-500 text-white font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg text-sm">
                                {edu.year}
                            </div>

                            {/* Icon */}
                            <div className="text-3xl sm:text-4xl mb-4">{edu.icon}</div>

                            {/* Degree */}
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                                {edu.degree}
                            </h3>
                            <p className="text-amber-600 font-medium mb-2 text-sm sm:text-base">
                                {edu.field}
                            </p>

                            {/* Institution */}
                            <p className="text-gray-600 text-xs sm:text-sm mb-4">
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
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="max-w-4xl mx-auto mt-12 md:mt-16">
                <h2
                    ref={ref}
                    className={`text-xl sm:text-2xl font-bold text-gray-700 text-center mb-6 md:mb-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                        }`}
                >
                    Certifications & Awards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div
                        ref={ref}
                        className={`bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 border border-amber-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-2xl sm:text-3xl">🏆</span>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm sm:text-base">Certificate of Excellence</h4>
                                <p className="text-amber-600 text-xs sm:text-sm">Soft BD Ltd</p>
                                <p className="text-gray-500 text-xs mt-1">January - June 2023</p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={ref}
                        className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-2xl sm:text-3xl">📜</span>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm sm:text-base">Web Application Development - PHP</h4>
                                <p className="text-blue-600 text-xs sm:text-sm">BITM</p>
                                <p className="text-gray-500 text-xs mt-1">August - December 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
