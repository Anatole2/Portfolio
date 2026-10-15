import type { Project } from '../../types/project';

import imgSyndex from '../../assets/images/syndex.png';

export const syndexProject: Project = {
    id: 5,
    title: "Administrateur système - Syndex (Mai - Juin 2023)",
    thumbnail: imgSyndex,
    description: "Gérer les données des acteurs de l’entreprise.",
    technologies: ["WinDev"],
    reportUrl: "/reports/Rapport_stage_Syndex.pdf",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                Vous pouvez consulter l'intégralité des analyses techniques, de la méthodologie et du bilan dans le rapport de stage ci-dessus.
            </p>
        </div>
    )
};