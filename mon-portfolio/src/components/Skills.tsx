interface Skill {
    name: string;
    iconUrl: string;
}

interface SkillCategory {
    category: string;
    items: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        category: "Back-end",
        items: [
            { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
            { name: "Laravel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: ".NET", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" }
        ]
    },
    {
        category: "Front-end",
        items: [
            { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Vue.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "HTML5 / CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
        ]
    },
    {
        category: "Données & Outils",
        items: [
            { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "R", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" }
        ]
    }
];

export const Skills = () => {
    return (
        <section className="skills-section">
            <div className="skills-container">
                <h2 className="skills-main-title">Compétences techniques</h2>

                <div className="skills-categories">
                    {skillsData.map((group, idx) => (
                        <div key={idx} className="skills-group">
                            <h3 className="skills-category-title">{group.category}</h3>
                            <div className="skills-grid">
                                {group.items.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-card">
                                        <span className="skill-name">{skill.name}</span>
                                        <img
                                            src={skill.iconUrl}
                                            alt={`Logo ${skill.name}`}
                                            className="skill-icon"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};