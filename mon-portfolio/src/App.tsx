import { useState } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import './App.css'

const aboutBio = [
  "Développeur Full Stack avec une solide expérience technique, j'ai conçu et déployé des plateformes SaaS, des CRM sur-mesure et des outils métiers interactifs pour des agences digitales et des projets innovants.",
  "Mon parcours académique commence par un BTS SIO (SLAM) puis une année d'immersion au Québec au Cégep de Matane. J'ai ensuite consolidé mes acquis en Bachelor Développeur Web à HETIC.",
  "Je poursuis actuellement mon cursus en Master Ingénierie du Web à l'ESGI pour approfondir l'écosystème web moderne, les architectures distribuées et l'intégration continue."
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Hero
        name="Anatole Dupuis"
        role="Développeur Web Fullstack"
      />

      <About
        title="À propos de moi"
        paragraphs={aboutBio}
      />

      <Skills />

      <Projects />

      <Resume />
    </main>
  )
}

export default App
