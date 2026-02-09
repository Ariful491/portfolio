'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Logo from '@/components/frontend/logo';
import {
    BoxIso,
    Facebook,
    Github,
    Internet,
    OpenBook,
    Code,
    GraduationCap,
    Mail,
    Suitcase
} from 'iconoir-react';
import { MenuIcon, PanelBottomClose, Layers, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuItem {
    name: string;
    link: string;
    icon: React.ReactNode;
    section: string;
}

const menus: MenuItem[] = [
    { name: 'Home', link: '#', icon: <BoxIso />, section: 'home' },
    { name: 'About', link: '#about', icon: <OpenBook />, section: 'about' },
    { name: 'Experience', link: '#experience', icon: <Suitcase />, section: 'experience' },
    { name: 'Projects', link: '#projects', icon: <Layers />, section: 'projects' },
    { name: 'Skills', link: '#skills', icon: <Code />, section: 'skills' },
    { name: 'Education', link: '#education', icon: <GraduationCap />, section: 'education' },
    { name: 'Contact', link: '#contact', icon: <Mail />, section: 'contact' },
];

const Sidebar: React.FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // Handle smooth scroll navigation
    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: string, section: string) => {
        e.preventDefault();
        setActiveSection(section);
        setOpenMenu(false);

        if (link === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.querySelector(link);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 20;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }, []);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = menus.map(m => m.section).filter(s => s !== 'home');
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [openMenu]);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                type="button"
                aria-label="Open Menu"
                onClick={() => setOpenMenu(true)}
                className={`md:hidden fixed top-4 left-4 z-50 p-3 rounded-xl shadow-lg transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-amber-100'
                    : 'bg-white shadow-gray-200'
                    } ${openMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <MenuIcon className="w-5 h-5 text-gray-700" />
            </button>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setOpenMenu(false)}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-[280px] md:w-[300px] bg-white shadow-2xl shadow-gray-200/50 transform transition-transform duration-500 ease-out ${openMenu ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                {/* Mobile Close Button */}
                <button
                    type="button"
                    aria-label="Close Menu"
                    onClick={() => setOpenMenu(false)}
                    className="md:hidden absolute top-4 right-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="flex flex-col h-full p-4 overflow-y-auto">
                    {/* Logo */}
                    <div className="flex justify-center py-6 border-b border-gray-100">
                        <Logo>.</Logo>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col space-y-1 mt-8 flex-1">
                        {menus.map((menu, index) => (
                            <a
                                key={index}
                                href={menu.link}
                                onClick={(e) => handleNavClick(e, menu.link, menu.section)}
                                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === menu.section
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-200'
                                    : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                                    }`}
                            >
                                <span className={`transition-transform duration-300 ${activeSection === menu.section
                                    ? 'scale-110'
                                    : 'group-hover:scale-110 group-hover:text-amber-500'
                                    }`}>
                                    {menu.icon}
                                </span>
                                <span>{menu.name}</span>

                                {/* Active indicator dot */}
                                {activeSection === menu.section && (
                                    <span className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="pt-6 border-t border-gray-100">
                        <p className="text-xs text-gray-400 text-center mb-4">Connect with me</p>
                        <div className="flex justify-center gap-3">
                            <a
                                href="https://github.com/ariful"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://gitlab.com/ariful"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                            >
                                <Internet className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Download CV Button */}
                    <div className="pt-4 pb-4">
                        <Button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/cv.pdf';
                                link.download = 'cv.pdf';
                                link.click();
                            }}
                            className="flex items-center justify-center gap-2 w-full py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-200 transition-all duration-300 hover:scale-[1.02] text-base"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
