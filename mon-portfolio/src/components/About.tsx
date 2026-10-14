interface AboutProps {
    title?: string;
    paragraphs: string[];
}

export const About = ({
    title = "À propos de moi",
    paragraphs
}: AboutProps) => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2 className="about-title">{title}</h2>
                <div className="about-text-container">
                    {paragraphs.map((text, index) => (
                        <p key={index} className="about-text">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};