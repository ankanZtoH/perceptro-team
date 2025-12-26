import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/40 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="space-y-2">
                        <img src="/logo-full.svg" alt="" className="w-50" />
                        <p className="text-sm text-gray-400">Innovating the future, one node at a time.</p>
                    </div>

                    <div className="flex space-x-6">
                        <SocialLink href="https://www.facebook.com/perceptron.rkmveri" icon={<Facebook size={20} />} label="Facebook" />
                        <SocialLink href="https://www.linkedin.com/company/perceptron-rkmveri/" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="https://www.instagram.com/perceptron.rkmveri" icon={<Instagram size={20} />} label="Instagram" />
                        <SocialLink href="mailto:perceptron.cs@gm.rkmvu.ac.in" icon={<Mail size={20} />} label="Email" />
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
    const isExternal = href.startsWith("http");
    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-gray-400 hover:text-neon-green transition-colors hover:scale-110 transform duration-200"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}
