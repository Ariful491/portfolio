'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
    const { ref, isVisible } = useScrollReveal();

    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <div
            ref={ref}
            className={`mb-12 md:mb-16 ${alignmentClasses[align]} ${isVisible
                    ? 'opacity-100 translate-y-0 animate-fade-up'
                    : 'opacity-0 translate-y-10'
                } transition-all duration-1000 ease-out`}
        >
            {/* Decorative line above */}
            <div className={`flex items-center gap-4 mb-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
                <span className="hidden sm:block w-8 md:w-12 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full" />
                <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-200" />
                <span className="hidden sm:block w-8 md:w-12 h-1 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto">
                    {subtitle}
                </p>
            )}

            {/* Decorative underline */}
            <div className={`flex items-center gap-2 mt-4 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
                <span className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
            </div>
        </div>
    );
}
