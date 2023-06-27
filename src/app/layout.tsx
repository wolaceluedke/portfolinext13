import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '../containers/header'
import { ContactForm } from '../containers/contact-form'
import { Footer } from '../containers/footer'
import { BackToTop } from '../components/back-to-top'
import './globals.css'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
         <BackToTop /> 
        <Header />
        {children}
         <ContactForm />
        <Footer /> 
      </body>
    </html>
  )
}
