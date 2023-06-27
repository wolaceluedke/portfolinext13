'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from './project-card'

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/projetos/prostyle">
          <ProjectCard />
        </Link>
      </motion.div>
    </section>
  )
}

export default ProjectsList
