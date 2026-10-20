import type { Project } from '../../types/project';

import imgDiscourd from '../../assets/images/discourd.png';
import imgAccueil from '../../assets/images/accueilDiscourd.jpg';
import imgDiscussion from '../../assets/images/discussion.jpg';
import imgAmis from '../../assets/images/amis.jpg';
import imgDemande from '../../assets/images/demande.jpg';
import imgAccepter from '../../assets/images/accepter.jpg';
import imgConnexion from '../../assets/images/connexion.jpg';
import imgInscription from '../../assets/images/inscription.jpg';
import imgProfil from '../../assets/images/profil.jpg';
import imgInfoProfil from '../../assets/images/infoProfil.jpg';
import imgGalerieOuPhoto from '../../assets/images/galerieOuPhoto.jpg';
import imgPhoto from '../../assets/images/photo.jpg';
import imgParametres from '../../assets/images/parametres.jpg';
import imgMap from '../../assets/images/map.jpg';

export const discourdProject: Project = {
    id: 10,
    title: "Développeur Mobile Android (Novembre-Décembre 2024)",
    thumbnail: imgDiscourd,
    description: "Application mobile de messagerie instantanée et de réseau social",
    technologies: ["Java", "Android Studio", "Firebase", "XML", "Google Maps API"],
    link: "",
    detailedContent: (
        <div className="project-detail">
            <p className="detail-paragraph">
                <strong>Discourd</strong> est une application mobile native sous Android inspirée de Discord. Elle propose une
                expérience fluide de communication privée, de partage de photos et d'interactions sociales, le tout synchronisé
                en temps réel grâce à <strong>Firebase</strong>.
            </p>

            <h4 className="detail-subtitle">1. Messagerie instantanée & interactions sociales</h4>
            <p className="detail-paragraph">
                Les utilisateurs peuvent engager des discussions instantanées privées, consulter leur liste d'amis, envoyer de nouvelles
                demandes de contact ou valider/refuser les invitations reçues.
            </p>

            <div className="discourd-gallery-grid">
                <figure className="detail-figure">
                    <img src={imgDiscussion} alt="Canal de discussion instantanée" className="detail-image-mobile" />
                    <figcaption>Discussion instantanée privée</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgAccueil} alt="Liste des messages privés" className="detail-image-mobile" />
                    <figcaption>Boîte de réception des messages</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgAmis} alt="Liste des amis" className="detail-image-mobile" />
                    <figcaption>Gestion du carnet d'amis</figcaption>
                </figure>
            </div>

            <div className="discourd-gallery-grid">
                <figure className="detail-figure">
                    <img src={imgDemande} alt="Envoi d'une demande d'ami" className="detail-image-mobile" />
                    <figcaption>Recherche et ajout de contact</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgAccepter} alt="Acceptation ou refus des demandes" className="detail-image-mobile" />
                    <figcaption>Gestion des demandes d'amis</figcaption>
                </figure>
            </div>

            <h4 className="detail-subtitle">2. Gestion du profil & intégration de la caméra</h4>
            <p className="detail-paragraph">
                L'application permet d'éditer ses informations de profil (pseudo, e-mail) et d'exploiter les capteurs matériels du
                smartphone. L'utilisateur peut ainsi mettre à jour sa photo d'avatar soit en ouvrant la <strong>galerie</strong>,
                soit en capturant directement un cliché via l'<strong>appareil photo</strong> (Camera API).
            </p>

            <div className="discourd-gallery-grid">
                <figure className="detail-figure">
                    <img src={imgProfil} alt="Écran du profil utilisateur" className="detail-image-mobile" />
                    <figcaption>Vue du profil utilisateur</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgInfoProfil} alt="Modification des informations" className="detail-image-mobile" />
                    <figcaption>Édition du pseudo et de l'e-mail</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgGalerieOuPhoto} alt="Choix de source d'image" className="detail-image-mobile" />
                    <figcaption>Sélection Caméra / Galerie</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgPhoto} alt="Prévisualisation de la photo" className="detail-image-mobile" />
                    <figcaption>Validation de la nouvelle photo</figcaption>
                </figure>
            </div>

            <h4 className="detail-subtitle">3. Carte interactive (Google Maps) & Paramètres</h4>
            <p className="detail-paragraph">
                Une section dédiée intègre le SDK <strong>Google Maps</strong> sous forme de minimap interactive avec marqueurs dynamiques.
                Un panneau de configuration complet permet d'ajuster les préférences de compte, la sécurité et les notifications.
            </p>

            <div className="discourd-gallery-grid">
                <figure className="detail-figure">
                    <img src={imgMap} alt="Minimap Google Maps" className="detail-image-mobile" />
                    <figcaption>Minimap intégrée Google Maps</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgParametres} alt="Paramètres de l'application" className="detail-image-mobile" />
                    <figcaption>Panneau des paramètres</figcaption>
                </figure>
            </div>

            <h4 className="detail-subtitle">4. Authentification & Sécurité</h4>
            <div className="discourd-gallery-grid">
                <figure className="detail-figure">
                    <img src={imgConnexion} alt="Mire de connexion" className="detail-image-mobile" />
                    <figcaption>Écran de connexion</figcaption>
                </figure>
                <figure className="detail-figure">
                    <img src={imgInscription} alt="Écran d'inscription" className="detail-image-mobile" />
                    <figcaption>Formulaire d'inscription</figcaption>
                </figure>
            </div>
        </div>
    )
};