import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://user-images.githubusercontent.com/108240352/235758004-6fa8b1bd-61e8-4db9-b3a1-299690c777d3.png"
          unoptimized
          alt="foto do projeto"
          className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8 ">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          ProStyle
        </strong>
        <p className="nt-2 text-gray-400 line-clanp-4">
          Projeto para fins acadêmicos no qual é criado um e-commerce Projeto
          proposto pela instituiçao Tera no curso de desenvolvimento full stack,
          no qual vai ser aplicado os conhecimentos adquiridos ao longo do
          curso.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          html, css, javascript, react
        </span>
      </div>
    </div>
  )
}
