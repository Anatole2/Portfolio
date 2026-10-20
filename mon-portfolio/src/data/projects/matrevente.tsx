import type { Project } from '../../types/project';

import imgMatRevente from '../../assets/images/matrevente.jpg';

export const matReventeProject: Project = {
    id: 8,
    title: "Développeur web full-stack (Septembre-Décembre 2024)",
    thumbnail: imgMatRevente,
    description: "Plateforme web d'achat et revente entre particuliers",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                <strong>MatRevente</strong> est une plateforme e-commerce dédiée au réemploi et à l'achat/revente d'articles d'occasion
                (fournitures, manuels scolaires, matériel divers). Le projet couvre l'ensemble du cycle de vente, de la mise en ligne
                d'annonces au règlement sécurisé en ligne.
            </p>

            <div className="video-responsive-wrapper">
                <iframe
                    src="https://www.youtube-nocookie.com/embed/N47zy3cezes"
                    title="Démonstration complète de la plateforme MatRevente"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <p className="video-caption">Vidéo de présentation et démonstration du parcours utilisateur sur MatRevente</p>

            <h4 className="detail-subtitle">Fonctionnalités clés développées :</h4>
            <ul className="detail-list">
                <li><strong>Sécurité & Authentification :</strong> Inscription avec vérification du compte par e-mail d'activation sécurisé.</li>
                <li><strong>Gestion des annonces (CRUD) :</strong> Publication avec import d'images, édition dynamique et suppression avec confirmation.</li>
                <li><strong>Recherche & Filtres :</strong> Recherche instantanée par mots-clés, filtrage par catégories et curseur de prix.</li>
                <li><strong>Paiement en ligne :</strong> Intégration de l'API PayPal et prise en charge du paiement par carte bancaire.</li>
                <li><strong>Internationalisation (i18n) :</strong> Prise en charge multilingue (français / anglais) de l'interface.</li>
                <li><strong>Espace Administration :</strong> Tableau de bord centralisé pour tracer, inspecter et filtrer (par dates, utilisateurs ou montants) l'historique complet des commandes.</li>
            </ul>
        </div>
    )
};