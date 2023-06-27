'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'

import Logo from '../../public/images/logoteste2.png'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/pages/projetos',
  },
]

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-transparent container flex items-center justify-between">
        <Link href="/">
          <Image
            width={170}
            height={170}
            src={Logo}
            alt="Logo wolace Dev"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
