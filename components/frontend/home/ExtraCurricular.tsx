'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';

export default function ExtraCurricular() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="extra-curricular" className="px-4 z-10 mb-20 overflow-hidden">
            <div className="grid grid-cols-1 gap-2 text-center">
                <h1
                    ref={ref}
                    className={`transition-all font-bold md:text-4xl text-gray-700 mb-16 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Extra Curricular Activities
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <ActivityCard
                    title="Biscuit Challenge"
                    position="3rd Position"
                    icon="🍪"
                    description="Successfully competed in the intense Biscuit Challenge, demonstrating speed, precision, and a love for snacks!"
                    color="amber"
                />
                {/* Placeholder for future activities */}
                {/* <ActivityCard ... /> */}
            </div>
        </section>
    );
}

function ActivityCard({ title, position, icon, description, color }: {
    title: string;
    position: string;
    icon: string;
    description: string;
    color: string;
}) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                {position}
            </div>

            <div className="text-5xl mb-6">{icon}</div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>

            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${color}-400 to-orange-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
    );
}
