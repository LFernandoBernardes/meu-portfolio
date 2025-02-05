// src/components/ProjectsCarousel.client.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Importe os módulos
import 'swiper/swiper-bundle.css';
import Image from 'next/image';


export default function ProjectsCarousel() {
  const projects = [
    { id: 1, 
        name: 'Bootcamp - Tripleten', 
        description: 'Cinco projetos de qualidade de Software. Com foco em testes manuais, testes de API criação de Plano de Testes', 
        image: '/images/bootcamp.png' 
    },
    { id: 2, 
        name: 'Swaglab', 
        description: 'Automação em Cypress e2e', 
        image: '/images/swaglab.png' ,
        url: 'http://localhost:3001/portfolio/2'
     },
    { id: 3, name: 'Duconder', description: 'Voluntário testes e2e, manual', image: '/images/duconder.png' },
    { id: 4, name: 'OrangemHRM', description: 'Testes em Cypress', image: '/images/orangemhrm.png' },
    { id: 5, name: 'JavaScript_StarWars', description: 'Projeto JavaScript', image: '/images/javascript_starwars.png' },
    // { id: 6, name: 'L5Network', description: 'Testes de navegação e interação no site e2e', image: '/images/l5network.png' },
  ];

  return (
    <Swiper
    spaceBetween={1}
    slidesPerView={2}
    loop={true} // Ativa o loop (repetição contínua)
    // navigation
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]} // Adicione os módulos
      className="projects-carousel"
            
      
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id} className="project-slide">
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={350}
            className="project-image"
          />
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}