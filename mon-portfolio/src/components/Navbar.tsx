export const Navbar = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="navbar-header">
            <nav className="navbar-container">
                <span className="navbar-logo" onClick={() => scrollTo('hero')}>
                    AD.
                </span>

                <ul className="navbar-links">
                    <li>
                        <button onClick={() => scrollTo('about')} className="navbar-link">
                            Présentation
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('skills')} className="navbar-link">
                            Compétences
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('projects')} className="navbar-link">
                            Projets
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo('resume')} className="navbar-link navbar-link-highlight">
                            CV
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};