'use client'
import { SectionTitle } from '../../../../components/section-title'
import { TechBadge } from '../../../home/tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { Button } from '../../../../components//button'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '../../../../components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

import BackgroundImage from '../../../public/images/hero-bg.png'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(${BackgroundImage.src}) no-repeat center/cover, url(https://user-images.githubusercontent.com/108240352/235758012-8b4ab396-8387-4235-aa99-b218accb21da.png) no-repeat center/cover`,
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title="ProStyle"
        className="text-center item-center sm:[&>h3]:text-4xl"
      />
      <motion.p
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
      >
        Projeto para fins acadêmicos no qual é criado um e-commerce Projeto
        proposto pela instituiçao Tera no curso de desenvolvimento full stack,
        no qual vai ser aplicado os conhecimentos adquiridos ao longo do curso.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 200, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center"
      >
        <TechBadge name="Html" />
        <TechBadge name="Css" />
        <TechBadge name="Javascript" />
        <TechBadge name="Bootstrap" />
      </motion.div>
      <motion.div className="my-6 sm:my-6 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/ZeCastr0/E-commerce-Tera-"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a
          href="https://zecastr0.github.io/E-commerce-Tera-/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Deploy
          </Button>
        </a>
      </motion.div>
      <Link href="/pages/projetos">
        <HiArrowNarrowLeft size={20} />
        voltar para projetos
      </Link>
    </section>
  )
}
