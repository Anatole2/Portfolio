import type { Project } from '../../types/project';

import imgVRSAO from '../../assets/images/vrsao.jpg';

export const vsSAOProject: Project = {
    id: 9,
    title: "Développeur VR (Janvier-Mars 2025)",
    thumbnail: imgVRSAO,
    description: "Jeu de réalité virtuelle",
    link: "",
    technologies: ["Unity", "C#", "Virtual Reality", "XR Interaction Toolkit", "Game Physics"],
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                Inspiré du light novel <em>Sword Art Online</em>, <strong>SAO VR</strong> est un jeu d'action en réalité virtuelle
                développé en équipe sous <strong>Unity</strong>. L'objectif est de repousser des vagues successives d'ennemis
                au corps-à-corps à l'aide d'épées simples ou en double maniement (<em>dual wielding</em>), au sein de niveaux à la difficulté progressive.
            </p>

            <div className="video-responsive-wrapper">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/xhRKJRs543s"
                    title="Démonstration du gameplay SAO VR"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="video-caption">Démonstration du gameplay, des combats et de la physique des armes en VR</p>

            <h4 className="detail-subtitle">Mes responsabilités & défis techniques :</h4>
            <ul className="detail-list">
                <li><strong>Physique et manipulation d'objets :</strong> Programmation en C# du système de préhension réaliste des armes (saisie naturelle en fermant la main, lâcher et inertie).</li>
                <li><strong>Ergonomie et lutte contre la cinétose (Motion Sickness) :</strong> Intégration d'un <em>vignetting</em> dynamique lors des mouvements rapides, stabilisation des mouvements de caméra et calibrage des déplacements fluides au joystick.</li>
                <li><strong>Boucle de combat & Feedback :</strong> Gestion des collisions arme/ennemi, enchaînement de coups, et retour visuel d'impact (assombrissement progressif du champ de vision lors des pertes de points de vie).</li>
                <li><strong>Interfaces spatiales (UI diégétique) :</strong> Conception de menus projetés attachés aux poignets du joueur pour la pause, les réglages et l'inventaire d'équipement, activés par pointage laser de l'autre main.</li>
            </ul>

            <h4 className="detail-subtitle">Architecture du gameplay :</h4>
            <p className="detail-paragraph">
                Le jeu propose un tutoriel interactif accueillant le joueur avec des panneaux holographiques pour lui apprendre le
                maniement des manettes et les bases du déplacement. Les ennemis adoptent des modèles d'attaques variés (certains
                rapides et agiles, d'autres massifs et puissants), forçant le joueur à alterner entre esquive, parade et riposte.
            </p>
        </div>
    )
};