import { cn } from "@/app/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
}

export default function GlitchText({ text, className, as: Component = "h1" }: GlitchTextProps) {
    return (
        <div className={cn("glitch-wrapper", className)}>
            <Component
                className="glitch relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-white"
                data-text={text}
            >
                {text}
            </Component>
        </div>
    );
}
