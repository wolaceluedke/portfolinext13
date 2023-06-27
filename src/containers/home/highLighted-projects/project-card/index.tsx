'use client'
import { HorizontalDivider } from '../../../../components/divider/horizontal'
import Image from 'next/image'
import { TechBadge } from '../../tech-badge'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '../../../../components/link'

import mainprostyle from '../../../../public/images/mainprostyle.png'
import mainspaproject from '../../../../public/images/mainspaproject.png'

const technologiesProStyle = ['Html', 'Css', 'Bootstrap', 'Javascript']
const technologiesSpa = ['Html', 'Css', 'React.js', 'Javascript']

export const ProjectCard = () => {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 lg:gap-12 flex-col lg:flex-column"
    >
      <motion.div
        className="w-full h-full object-cover rounded-lg"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Link href="/pages/projetos/prostyle">
          <Image
            src={mainprostyle}
            width={420}
            height={304}
            alt="PÁGINA PRINCIPAL DO PROJETO"
            className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
          />
        </Link>
      </motion.div>

      <div>
        <motion.h3
          {...animProps}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
        >
          ProStyle
        </motion.h3>
        <motion.p
          {...animProps}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-gray-400 my-6"
        >
          Projeto front-end na qual tem as seguintes funcionalidades, uma página principal demostrando roupas e com carousel, página de cadastro de usuários, página de login e outra para carrinho.
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {technologiesProStyle.map((tech, index) => (
            <TechBadge
              name={tech}
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            />
          ))}
        </div>
        <Link href="/pages/projetos/prostyle">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
      <HorizontalDivider className="my-16" />

      <motion.div
        className="w-full h-full object-cover rounded-lg"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Link href="/pages/projetos/spaproject">
          <Image
            src={mainspaproject}
            width={420}
            height={304}
            alt="PÁGINA PRINCIPAL DO PROJETO"
            className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
          />
        </Link>
      </motion.div>

      <div>
        <motion.h3
          {...animProps}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
        >
          Blog Tera
        </motion.h3>
        <motion.p
          {...animProps}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-gray-400 my-6"
        >
          Desenvolvi uma Single Page Application (SPA) utilizando o React Router
          Dom para controlar o roteamento e a atualização da página. Aprendi
          sobre o conceito de Atomic Design, que me ajudou a dividir o código em
          componentes menores para facilitar a manutenção e possibilitar a
          escalabilidade do projeto. Utilizei o método fetch para consumir uma
          API que fornecia uma lista de usuários. Também trabalhei com hooks,
          como useState e useEffect, e utilizei handlers como onClick e
          onChange. Além disso, fiz iterações em arrays usando as funções sort e
          map.
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {technologiesSpa.map((tech, index) => (
            <TechBadge
              name={tech}
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            />
          ))}
        </div>
        <Link href="/pages/projetos/spaproject">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
