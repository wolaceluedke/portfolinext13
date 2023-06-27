'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const sections = [
  {
    title: 'Main',
    image:
      'https://user-images.githubusercontent.com/108240352/235753484-55978b7d-2f8a-4a51-b175-2b52b3b64b98.png',
  },
  {
    title: 'Publicação',
    image:
      'https://user-images.githubusercontent.com/108240352/235753508-c9fb227c-f30b-438a-b60a-5ab47a3be41d.png',
  },
]

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            unoptimized
          />
        </motion.div>
      ))}
    </section>
  )
}
