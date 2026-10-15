import type { Project } from '../../types/project';
import imgSignobot from '../../assets/images/signobot.jpg';

export const signobotProject: Project = {
    id: 5,
    title: "Développeur Systèmes Embarqués & IoT (Janvier-Mars 2025)",
    thumbnail: imgSignobot,
    description: "Contrôle d'une main robotique motorisée via carte Arduino Uno, servomoteurs PWM et communication série.",
    technologies: ["Arduino", "C++", "PWM"],
    link: "",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                Ce projet consiste à concevoir, câbler et programmer le pilotage d'une <strong>main robotique articulée</strong> actionnée par des servomoteurs,
                contrôlée directement depuis l'ordinateur via le moniteur série (Serial Monitor) de l'IDE Arduino.
            </p>

            <h4 className="detail-subtitle">Architecture matérielle et câblage</h4>
            <p className="detail-paragraph">
                Chaque doigt est actionné par un servomoteur connecté à une broche <strong>PWM (Pulse Width Modulation)</strong> dédiée
                de la carte Arduino Uno afin d'en doser l'angle d'inclinaison :
            </p>

            <ul className="detail-list">
                <li><strong>Pouce :</strong> port PWM <code>3</code></li>
                <li><strong>Auriculaire :</strong> port PWM <code>5</code></li>
                <li><strong>Annulaire :</strong> port PWM <code>6</code></li>
                <li><strong>Majeur :</strong> port PWM <code>9</code></li>
                <li><strong>Index :</strong> port PWM <code>10</code></li>
            </ul>

            <p className="detail-paragraph">
                Pour éviter de surcharger le régulateur de tension de l'Arduino lors des mouvements simultanés, le circuit de puissance
                est déporté sur un <strong>breadboard</strong>. Les servomoteurs sont alimentés par une batterie
                externe dédiée, avec mise en commun des masses (GND commun entre la carte Arduino et le breadboard).
            </p>

            <h4 className="detail-subtitle">1. Contrôle unitaire : bascule par touche clavier</h4>
            <p className="detail-paragraph">
                Le programme permet d'ouvrir ou de fermer individuellement chaque doigt en envoyant une commande caractère depuis le
                moniteur série. Chaque frappe commute la position du servomoteur associé.
            </p>

            <div className="video-responsive-wrapper">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/Leobyeaw03c"
                    title="Démonstration du mouvement d'un doigt individuel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="video-caption">Démonstration : ouverture et fermeture d'un doigt par commande série</p>

            <h4 className="detail-subtitle">2. Contrôle global : synchronisation et angles personnalisés</h4>
            <p className="detail-paragraph">
                Pour des gestes complexes ou des prises en main spécifiques, le moniteur série permet d'injecter une série de
                valeurs angulaires précises. Les angles sont transmis selon l'ordre strict des ports PWM (Pouce, Auriculaire,
                Annulaire, Majeur, Index), permettant ainsi de positionner l'ensemble des doigts simultanément dans une configuration
                souhaitée.
            </p>

            <div className="video-responsive-wrapper">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/YMG6XlKxNnk"
                    title="Démonstration du mouvement synchronisé de tous les doigts"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="video-caption">Démonstration : synchronisation multi-doigts et positionnement angulaire</p>
        </div>
    )
};