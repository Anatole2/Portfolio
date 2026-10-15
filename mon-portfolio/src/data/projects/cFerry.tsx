import type { Project } from '../../types/project';

import imgCSharp from '../../assets/images/interface.jpg';
import imgConcepteur from '../../assets/images/concepteur.png';
import imgAjout from '../../assets/images/ajout.jpg';
import imgModif from '../../assets/images/modif.jpg';

export const cFerryProject: Project = {
    id: 2,
    title: "Développeur backend (Octobre-Novembre 2023)",
    thumbnail: imgCSharp,
    description: "Interface graphique C# affichant les secteurs et les liaisons liées de SicilyLines.",
    technologies: ["C#", ".NET", "MySQL"],
    link: "https://github.com/Anatole2/Mission-2",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                En deuxième année de BTS, j'ai réalisé un projet en groupe pour une entreprise fictive de traversées de bateaux
                s'appelant <strong>SicilyLines</strong>. Le projet consistait à réaliser une interface graphique permettant
                de visualiser les secteurs des traversées et les liaisons associées, tout en offrant la possibilité
                d'insérer, modifier et supprimer des liaisons de manière ergonomique.
            </p>

            <p className="detail-paragraph">
                Il a d’abord fallu concevoir la base de données. Pour cela, nous avons utilisé le logiciel <strong>WinDesign</strong>
                pour modéliser le schéma UML, puis nous l’avons exporté sur <strong>MySQL</strong>.
            </p>

            <figure className="detail-figure">
                <img src={imgConcepteur} alt="Modèle conceptuel de la base de données SicilyLines" className="detail-image" />
                <figcaption>Concepteur de la base de données relationnelle</figcaption>
            </figure>

            <p className="detail-paragraph">
                Nous avons ensuite créé l’interface graphique en suivant une architecture logicielle en couches.
                Une fois la connexion à la base de données établie, l'application affichait dynamiquement les secteurs
                et leurs liaisons respectives.
            </p>

            <figure className="detail-figure">
                <img src={imgCSharp} alt="Interface graphique principale" className="detail-image" />
                <figcaption>Interface graphique principale</figcaption>
            </figure>

            <p className="detail-paragraph">
                Les actions d’ajout et d’édition ouvraient des formulaires dédiés avec contrôle de saisie (verrouillage
                du secteur lors de l'ajout, restriction à la durée lors de la modification) et confirmation de suppression.
            </p>

            <div className="detail-image-grid">
                <figure className="detail-figure">
                    <img src={imgAjout} alt="Formulaire d'ajout" className="detail-image" />
                    <figcaption>Formulaire d'ajout d'une liaison</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgModif} alt="Formulaire de modification" className="detail-image" />
                    <figcaption>Formulaire de modification</figcaption>
                </figure>
            </div>

            <p className="detail-paragraph">
                Ce projet a été mené en binôme. Pour synchroniser nos développements et coordonner nos tâches efficacement,
                nous avons utilisé <strong>GitHub</strong>.
            </p>
        </div>
    )
}