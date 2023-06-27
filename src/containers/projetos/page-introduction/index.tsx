'use client'
import { motion } from 'framer-motion'
import { Link } from '../../../components/link'
import { SectionTitle } from '../../../components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl "
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns trabalhos que eu desenvolvi. Navegue á
          vontade e explore os projetos.
        </p>
        <Link href="">
          <HiArrowNarrowLeft size={20} />
          Voltar para home
        </Link>
      </motion.div>
    </section>
  )
}
export default PageIntroduction
