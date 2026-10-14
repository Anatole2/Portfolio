import avatarImg from '../assets/images/pp.webp';

interface HeroProps {
    name: string;
    role: string;
}

export const Hero = ({ name, role }: HeroProps) => {
    return (
        <section className="hero-container">
            <img
                src={avatarImg}
                alt={`Photo de profil de ${name}`}
                className="hero-avatar"
            />
            <div className="hero-text">
                <h1 className="hero-name">{name}</h1>
                <p className="hero-role">{role}</p>
            </div>
        </section>
    );
};