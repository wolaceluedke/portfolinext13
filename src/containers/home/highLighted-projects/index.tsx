import { HorizontalDivider } from '../../../components/divider/horizontal'
import { SectionTitle } from '../../../components/section-title'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos Em Destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        {/* <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p> */}
      </div>
    </section>
  )
}
