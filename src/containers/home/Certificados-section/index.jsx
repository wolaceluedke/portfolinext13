'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { SectionTitle } from '../../../components/section-title'

import certificadofullstack from '../../../public/images/fullstacktera.png'
import certificadofrontend from '../../../public/images/certificadofrontendtera.png'
import certificadoback from '../../../public/images/certificadobackendtera.png'
import certificadoreact from '../../../public/images/Certificado Reactjs.png'
import certificadopython from '../../../public/images/pythoncertificadotera.png'

const certificados = [
  {
    id: 1,
    title: 'Full Stack Developer',
    image: certificadofullstack,
  },
  {
    id: 2,
    title: 'Front End',
    image: certificadofrontend,
  },
  {
    id: 3,
    title: 'Back End',
    image: certificadoback,
  },
  {
    id: 4,
    title: 'React.JS',
    image: certificadoreact,
  },
  {
    id: 4,
    title: 'Python & Cloud Computing',
    image: certificadopython,
  },
  // Adicione mais objetos conforme necessário
]

export const CertificadosSection = () => {
  return (
    <section className="container py-10">
      <SectionTitle title="Certificados de cursos" subtitle="certificados" />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9"
      >
        {certificados.map((certificado) => (
          <div key={certificado.id} className="flex flex-col items-center">
            <Image
              width={300}
              height={150}
              src={certificado.image}
              alt={certificado.title}
            />
            <h3 className="text-lg font-semibold mt-2 text-center">
              {certificado.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
