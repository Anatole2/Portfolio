import type { Project } from '../../types/project';

import imgEvoBotics from '../../assets/images/evobotics.jpg';

export const evoBoticsProject: Project = {
    id: 3,
    title: "Développeur web full-stack (Février-Juin 2026)",
    thumbnail: imgEvoBotics,
    description: "Application web et système de réservation connectés à un robot autonome d'accueil et de guidage en centre d'affaires.",
    technologies: [
        "Laravel",
        "React",
        "Inertia.js",
        "TypeScript",
        "MySQL",
        "Docker"
    ],
    link: "https://github.com/Ambiya12/evo-botics-raa",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                Dans le cadre d'un projet d'ingénierie logicielle et robotique, nous avons développé
                la solution <strong>Evo Botics</strong>, un robot autonome d'accueil destiné aux centres
                d'affaires et espaces de coworking. Le robot a pour mission de vérifier les réservations des visiteurs internationaux via un écran tactile
                ou un scanner, et de les guider physiquement dans les couloirs jusqu'à leur salle de réunion.
            </p>

            <p className="detail-paragraph">
                Le système sépare l'expérience en deux environnements distincts : une interface publique/kiosk
                permettant la sélection de créneaux, et un tableau de bord d'administration interactif
                fait avec <strong>Inertia.js et React</strong>. Ce découpage permet de piloter
                l'application comme une Single Page Application (SPA) fluide tout en conservant la robustesse
                de l'authentification et des politiques de sécurité de Laravel.
            </p>

            <p className="detail-paragraph">
                Sur ce projet, j'ai notamment conçu et développé l'ensemble du module de
                <strong> gestion administrative des sessions et des créneaux</strong>.
                Côté frontend, j'ai développé l'interface en <strong>React et TypeScript</strong> en implémentant
                un système de filtrage multicritères (par salle et par statut de disponibilité) ainsi que des tris
                indépendants par date et par tranche horaire. L'ensemble de la logique de tri s'exécute côté
                client via le hook <code>useMemo</code>, assurant une réactivité instantanée sans solliciter inutilement
                la base de données.
            </p>

            <p className="detail-paragraph">
                Côté backend, j'ai implémenté le contrôleur de réservation (<code>BookingSessionController</code>)
                chargé d'attribuer intelligemment une salle selon le nombre de participants demandé. Afin d'éviter
                toute corruption de données ou réservation en double, l'écriture est encapsulée dans une
                <strong> transaction SQL (ACID)</strong>. Pour sécuriser les accès publics et contrer les attaques
                par énumération (IDOR), chaque réservation génère automatiquement un identifiant universel
                unique (<strong>UUID</strong>) à la création du modèle.
            </p>

            <p className="detail-paragraph">
                J'ai également intégré l'internationalisation complète (i18n) de l'interface d'administration
                ainsi que la localisation automatique du format des dates via l'API native JavaScript
                (<code>toLocaleDateString</code>) synchronisée sur la langue de l'utilisateur.
                Pour assurer la traçabilité des actions (succès, échecs de capacité, annulations), j'ai mis en place
                un système de journalisation par <strong>relation polymorphique</strong> (<code>ActivityLog</code>).
            </p>
        </div>
    )
};