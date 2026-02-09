'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

const contactInfo = {
    email: "arifulhoque091@gmail.com",
    phones: ["01616017619", "01724241388"],
    location: "Ashrafabad, Kamranghirchor, Dhaka",
    links: [
        { name: "GitHub", url: "https://github.com/ariful", icon: Github },
        { name: "GitLab", url: "https://gitlab.com/ariful", icon: ExternalLink },
        { name: "Blog", url: "#", icon: ExternalLink }
    ]
};

export default function Contact() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="contact" className="px-4 z-10 mb-40 overflow-hidden">
            <div className="grid grid-cols-1 gap-2 text-center">
                <h1
                    ref={ref}
                    className={`transition-all font-bold text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-6 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Get In Touch
                </h1>
                <p className={`text-gray-500 mb-12 max-w-2xl mx-auto text-sm sm:text-base ${isVisible ? 'animate-fade-up' : 'opacity-0'
                    }`}>
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Contact Info */}
                    <div
                        ref={ref}
                        className={`space-y-4 sm:space-y-6 ${isVisible
                            ? 'opacity-100 translate-y-0 animate-fade-up'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {/* Email */}
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="p-2 sm:p-3 bg-amber-100 rounded-full group-hover:bg-amber-500 transition-colors">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-800 text-sm sm:text-base">{contactInfo.email}</p>
                            </div>
                        </a>

                        {/* Phone */}
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-lg">
                            <div className="p-2 sm:p-3 bg-green-100 rounded-full">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                                <p className="font-medium text-gray-800 text-sm sm:text-base">
                                    {contactInfo.phones.join(" / ")}
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl shadow-lg">
                            <div className="p-2 sm:p-3 bg-blue-100 rounded-full">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Location</p>
                                <p className="font-medium text-gray-800 text-sm sm:text-base">{contactInfo.location}</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                            {contactInfo.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-amber-500 transition-colors text-sm"
                                >
                                    <link.icon className="w-4 h-4" />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        ref={ref}
                        className={`bg-white rounded-2xl shadow-lg p-5 sm:p-8 ${isVisible
                            ? 'opacity-100 translate-y-0 animate-fade-up'
                            : 'opacity-0 translate-y-10'
                            }`}
                        style={{ animationDelay: '100ms' }}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
