import { useState } from 'react';
import type { Project } from '../types/project';
import { projectsList } from '../data/projects';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="projects-section">
            <div className="projects-container">
                <h2 className="projects-title">Mes Projets</h2>

                <div className="projects-grid">
                    {projectsList.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-thumbnail-wrapper">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="project-thumbnail"
                                />
                            </div>
                            <h3 className="project-card-title">{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Fermer la modale"
                        >
                            &times;
                        </button>

                        <h3 className="modal-title">{selectedProject.title}</h3>

                        <div className="modal-header-actions">
                            <div className="modal-tags">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span key={index} className="modal-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="modal-action-buttons">
                                {selectedProject.reportUrl && (
                                    <a
                                        href={selectedProject.reportUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="modal-btn modal-btn-secondary"
                                    >
                                        📄 Rapport de stage
                                    </a>
                                )}

                                {/* Bouton vers le projet / GitHub */}
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="modal-btn"
                                    >
                                        Voir le projet ↗
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="modal-body">
                            <img
                                src={selectedProject.thumbnail}
                                alt={selectedProject.title}
                                className="modal-image"
                            />

                            {selectedProject.detailedContent}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};