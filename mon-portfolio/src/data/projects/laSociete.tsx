import type { Project } from '../../types/project';

import imgLaSociete from '../../assets/images/la-societe.png';

export const laSocieteProject: Project = {
    id: 4,
    title: "Développeur web – La Société (Avril - Mai 2025)",
    thumbnail: imgLaSociete,
    description: "Développement de jeux d’énigmes sur navigateur.",
    technologies: ["JavaScript", "Git"],
    reportUrl: "/reports/Rapport_de_stage_La-Societe.pdf",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                Vous pouvez consulter l'intégralité des analyses techniques, de la méthodologie et du bilan dans le rapport de stage ci-dessus.
            </p>
        </div>
    )
};