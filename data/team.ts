import teamData from "./team.json";

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    category: "Core Team" | "Event Team" | "Tech & Design Team";
    image?: string;
    socials: {
        github?: string;
        linkedin?: string;
        instagram?: string;
        web?: string;
        phone?: string;
        portfolio?: string;
    };
};

export const teamMembers: TeamMember[] = teamData as TeamMember[];
