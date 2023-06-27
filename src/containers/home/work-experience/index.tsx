'use client'
import { SectionTitle } from '../../../components/section-title'
import { ExperienceItem } from './experience-item'
import { motion } from 'framer-motion'



export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 lg:gap-16 md:gap-4 md:flex-row flex-col">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional Em Tecnologia"
        />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 mt-6"
        >
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incriveis
        </motion.p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  )
}
