import { HeroSection } from '../containers/home/hero-section'
import { HighlightedProjects } from '../containers/home/highLighted-projects'
import { KnownTechs } from '../containers/home/known-techs'
import { WorkExperience } from '../containers/home/work-experience'
import { CertificadosSection } from '../containers/home/Certificados-section'


export default async function Home() {

  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <CertificadosSection />
      <WorkExperience />
    </>
  )
}
