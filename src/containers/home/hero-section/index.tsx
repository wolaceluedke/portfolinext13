'use client'
import Image from 'next/image'
import { TechBadge } from '../tech-badge'
import { Button } from '../../../components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import {  motion } from 'framer-motion'

import picprofile from '../../../public/images/fotoprofile.png'
import BackgroundImage from '../../../public/images/background.jpg';

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/wolaceluedke',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://github.com/wolaceluedke',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://api.whatsapp.com/send?phone=5547991287376',
    icon: <TbBrandWhatsapp />,
  },
]

const technologies = [
  'Css',
  'javascript',
  'React.js',
  'node.js',
  'MongoDB',
  'SQL',
  'Python',
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section
      className="w-full lg:h-[755px] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sn:pb-32 py-32 lg:pb-[110px]"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
    >
      <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-cyan-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Wolace Luedke</h2>
          <p className="text-gray-400 my-6 text-sm sm:text base ">
          Olá, meu nome é Wolace, e sou um entusiasta da tecnologia que atua como desenvolvedor web. Tenho um ano de experiência na área de estudos em desenvolvimento full stack. Meu objetivo principal é criar interfaces de usuário que sejam tanto atraentes visualmente quanto funcionais em sua execução. 
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {technologies.map((tech, index) => (
              <TechBadge
                key={`tech-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                name={tech}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
  className="w-[450px] h-[350px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-1xl object-contain rounded-full"
  src={picprofile}
  alt="foto do perfil"
/>
        </motion.div>
      </div>
    </section>
  )
}
