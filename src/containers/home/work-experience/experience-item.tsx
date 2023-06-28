'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const ExperienceItem = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[60px,1fr] gap-4 md:gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-full w-[1px] bg-gray-600" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sn:text-base">
          <a
            href="https://destakprestadoradeservicos.com/"
            target="_blak"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            @ Destak Prestadora de serviços
          </a>
          <h4 className="text-gray-300">Freelancer</h4>
          <p className="text-gray-400 ">
            Realizei um projeto freelancer para uma empresa prestadora de
            serviços, na qual eles tinha como objetivo mostrar os serviços que
            eles prestavam para mandar para clientes.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
