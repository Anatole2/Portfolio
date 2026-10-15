import type { Project } from '../../types/project';

import imgLaravel from '../../assets/images/accueil.jpg';
import imgListeFerrys from '../../assets/images/liste_ferrys.jpg';
import imgShowFerry from '../../assets/images/show.jpg';
import imgAjoutFerry from '../../assets/images/ajout_ferry.jpg';
import imgPdfFerry from '../../assets/images/pdf.jpg';
import imgLogFerry from '../../assets/images/log.jpg';

export const laravelFerrysProject: Project = {
    id: 1,
    title: "Développeur full-stack (Novembre-Décembre 2023)",
    thumbnail: imgLaravel,
    description: "Site web affichant les ferrys de SicilyLines.",
    technologies: ["Laravel", "MySQL", "Git"],
    link: "https://github.com/Anatole2/Mission-3",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                En deuxième année de BTS, j'ai réalisé un projet en groupe pour l'entreprise fictive <strong>SicilyLines</strong>.
                L'objectif était de développer une application web permettant aux collaborateurs connectés de piloter et gérer
                l'ensemble de la flotte de ferrys.
            </p>

            <p className="detail-paragraph">
                Nous avons débuté par la conception et la migration de la base de données via <strong>Laravel</strong>. Une fois
                la structure en place, nous avons configuré le routage, la page d'accueil et le listing des bateaux. Chaque entrée
                du tableau présente les informations clés du navire, accompagnées d'actions pour consulter ses caractéristiques ou
                procéder à sa suppression.
            </p>

            <figure className="detail-figure">
                <img
                    src={imgListeFerrys}
                    alt="Interface de consultation et de gestion des ferrys"
                    className="detail-image"
                />
                <figcaption>Tableau récapitulatif de la flotte de ferrys</figcaption>
            </figure>

            <p className="detail-paragraph">
                L'action <strong>« Voir »</strong> charge une fiche détaillée (card) regroupant la photo du navire, ses dimensions,
                sa vitesse ainsi que la liste exhaustive de ses équipements à bord, complétée par un bouton de retour vers le tableau.
            </p>

            <figure className="detail-figure">
                <img
                    src={imgShowFerry}
                    alt="Fiche détaillée d'un ferry"
                    className="detail-image"
                />
                <figcaption>Fiche détaillée des caractéristiques d'un ferry</figcaption>
            </figure>

            <p className="detail-paragraph">
                Le bouton <strong>« Ajouter »</strong> dirige vers un formulaire de saisie sécurisé. Les données transmises par requête
                <strong>POST</strong> sont validées côté serveur avant enregistrement en base, déclenchant ensuite une redirection vers le
                tableau mis à jour.
            </p>

            <figure className="detail-figure">
                <img
                    src={imgAjoutFerry}
                    alt="Formulaire de création d'un nouveau ferry"
                    className="detail-image"
                />
                <figcaption>Formulaire d'ajout d'une unité à la flotte</figcaption>
            </figure>

            <p className="detail-paragraph">
                Nous avons également implémenté la suppression des enregistrements ainsi qu'une fonctionnalité dédiée d'export
                permettant de générer dynamiquement un rapport récapitulatif au format PDF.
            </p>

            <figure className="detail-figure">
                <img
                    src={imgPdfFerry}
                    alt="Exemple de document PDF généré"
                    className="detail-image"
                />
                <figcaption>Rapport récapitulatif généré au format PDF</figcaption>
            </figure>

            <p className="detail-paragraph">
                La sécurité de l'application est assurée par un module d'authentification complet : l'accès aux données de la flotte
                est strictement restreint aux membres connectés, avec possibilité de déconnexion à tout moment depuis la barre de navigation.
            </p>

            <div className="detail-image-grid">
                <figure className="detail-figure">
                    <img
                        src={imgLaravel}
                        alt="Page d'accueil de SicilyLines"
                        className="detail-image"
                    />
                    <figcaption>Page d'accueil publique</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img
                        src={imgLogFerry}
                        alt="Mire d'authentification utilisateur"
                        className="detail-image"
                    />
                    <figcaption>Portail d'authentification</figcaption>
                </figure>
            </div>

            <p className="detail-paragraph">
                Mené en binôme, ce travail collaboratif s'est appuyé sur <strong>GitHub</strong> pour la revue de code, le suivi des
                versions et l'organisation des branches de fonctionnalités.
            </p>
        </div>
    )
}