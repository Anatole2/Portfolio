interface ResumeProps {
    cvPath?: string;
    fileName?: string;
}

export const Resume = ({
    cvPath = "/CV_Anatole_Dupuis.pdf",
    fileName = "CV_Anatole_Dupuis.pdf"
}: ResumeProps) => {
    return (
        <section className="resume-section">
            <div className="resume-container">
                <div className="resume-card">
                    <div className="resume-icon-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="resume-icon"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>

                    <h2 className="resume-title">Mon Curriculum Vitae</h2>
                    <p className="resume-description">
                        Retrouvez le détail complet de mes expériences, de mes formations et de mes compétences techniques au format PDF.
                    </p>

                    <div className="resume-actions">
                        <a
                            href={cvPath}
                            download={fileName}
                            className="resume-download-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="btn-icon"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Télécharger mon CV (PDF)
                        </a>

                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noreferrer"
                            className="resume-preview-btn"
                        >
                            Aperçu en ligne
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};