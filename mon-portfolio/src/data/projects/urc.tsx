import type { Project } from '../../types/project';

import imgURC from '../../assets/images/urc.webp';

export const urcProject: Project = {
    id: 6,
    title: "Data manager - Unité de Recherche Clinique Hôpital Pitié-Salpêtrière (Janvier - Février 2024)",
    thumbnail: imgURC,
    description: " Aider et accompagner les médecins en effectuant des études.",
    technologies: ["R Studio", "R"],
    reportUrl: "/reports/Rapport_stage_URC.pdf",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                Vous pouvez consulter l'intégralité des analyses techniques, de la méthodologie et du bilan dans le rapport de stage ci-dessus.
            </p>
        </div>
    )
};