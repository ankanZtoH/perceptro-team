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
        web?: string; // Kept for backward compatibility or general web link
        phone?: string;
        portfolio?: string; // Specific for Designers
    };
};

export const teamMembers: TeamMember[] = [
    // Core Team
    { id: "1", name: "Tuhin Patra", role: "Secretary", category: "Core Team", image: '/team/fabicon.png', socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "2", name: "Debayan Dutta", role: "Joint Secretary", category: "Core Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "3", name: "Anurag Joardar", role: "Convenor", category: "Core Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "4", name: "Debanjan Nanda", role: "Treasurer", category: "Core Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },

    // Event Team
    { id: "5", name: "Saikat Kumar Ghosh", role: "Better Call Tal Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "6", name: "Uddalak Mukherjee", role: "Exquizzit Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "7", name: "Ayan Maity", role: "Deep Think Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "8", name: "Biswajit Rana", role: "The Turing Show Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "9", name: "Amit Bera", role: "Clash of Wheels Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "10", name: "Atanu Saha", role: "Enigma Equation Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "11", name: "Diptesh Saha", role: "Under the Hammer Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "12", name: "Aniket Ghosh", role: "Beyond the Lines Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },
    { id: "13", name: "Samapan Kar", role: "Lens and Light Lead", category: "Event Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000" } },

    // Tech & Design Team
    { id: "14", name: "Ayantanu Laha", role: "Design Team Lead", category: "Tech & Design Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000", portfolio: "#" } },
    { id: "15", name: "Sayan Das", role: "Web Developer", category: "Tech & Design Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000", portfolio: "#" } },
    { id: "16", name: "Pankaj Sadukha", role: "Designer", category: "Tech & Design Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000", portfolio: "#" } },
    { id: "17", name: "Rajarshi Saha", role: "Designer", category: "Tech & Design Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000", portfolio: "#" } },
    { id: "18", name: "Niladri Ghosh", role: "Videographer", category: "Tech & Design Team", socials: { linkedin: "#", github: "#", phone: "tel:+910000000000", portfolio: "#" } },
];
