import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/40 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold font-orbitron text-white">PERCEPTRON 2K26</h3>
                        <p className="text-sm text-gray-400">Innovating the future, one node at a time.</p>
                    </div>

                    <div className="flex space-x-6">
                        <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                        <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                    </div>

                    <div className="text-sm text-gray-500">
                        &copy; 2026 Perceptron Team. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="text-gray-400 hover:text-neon-green transition-colors hover:scale-110 transform duration-200"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}
