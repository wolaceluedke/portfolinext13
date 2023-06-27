'use client'
import { SectionTitle } from '../../../components/section-title'
import {
  TbBrandNextjs,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandReact,
  TbBrandPython,
} from 'react-icons/tb'
import { IoLogoNodejs } from 'react-icons/io'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const KnownTechs = () => {
  const techs = [
    { icon: <TbBrandHtml5 />, name: 'HTML', startDate: '2022-07-01' },
    { icon: <TbBrandCss3 />, name: 'CSS', startDate: '2022-07-01' },
    {
      icon: <TbBrandJavascript />,
      name: 'Javascript',
      startDate: '2022-07-01',
    },
    { icon: <TbBrandReact />, name: 'React.js', startDate: '2022-07-01' },
    { icon: <TbBrandNextjs />, name: 'Next.js', startDate: '2023-04-01' },
    { icon: <IoLogoNodejs />, name: 'Node.js', startDate: '2022-07-01' },
    { icon: <AiOutlineConsoleSql />, name: 'SQL', startDate: '2023-09-01' },
    { icon: <TbBrandMongodb />, name: 'MongoDB', startDate: '2022-07-01' },
    { icon: <TbBrandPython />, name: 'Python', startDate: '2022-07-01' },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true, // Apenas ativa o observer uma vez
    threshold: 0.2, // Percentual de visibilidade para ativar
  })

  return (
    <section className="container py-16 grid-cols">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]"
        ref={ref}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
