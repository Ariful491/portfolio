'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                    className={`transition-all font-bold md:text-4xl text-gray-700 mb-6 duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 animate-fade-up'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    Get In Touch
                </h1>
                <p className={`text-gray-500 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'
                    }`}>
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <ContactInfo />

                {/* Contact Form */}
                <ContactForm />
            </div>
        </section>
    );
}

function ContactInfo() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`space-y-6 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Email */}
            <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
                <div className="p-3 bg-amber-100 rounded-full group-hover:bg-amber-500 transition-colors">
                    <Mail className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">{contactInfo.email}</p>
                </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg">
                <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">
                        {contactInfo.phones.join(" / ")}
                    </p>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg">
                <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{contactInfo.location}</p>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
                {contactInfo.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-amber-500 transition-colors"
                    >
                        <link.icon className="w-4 h-4" />
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

function ContactForm() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
        >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Your message..."
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
}
