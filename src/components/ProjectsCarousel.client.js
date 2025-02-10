// src/components/ProjectsCarousel.client.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Importe os módulos
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import Link from 'next/link'; // Importe o Link do Next.js


export default function ProjectsCarousel() {
  const projects = [
    {
      id: 1,
      name: 'Bootcamp - Tripleten',
      description: 'Cinco projetos de qualidade de Software. Com foco em testes manuais, testes de API criação de Plano de Testes',
      image: '/images/bootcamp.png',
      url: 'http://localhost:3000/portfolio/1' // URL da página do projeto
    },
    {
      id: 2,
      name: 'Swaglab',
      description: 'Automação em Cypress e2e',
      image: '/images/swaglab.png',
      url: 'http://localhost:3000/portfolio/2' // URL da página do projeto
    },
    {
      id: 3,
      name: 'Duconder',
      description: 'Voluntário testes e2e, manual',
      image: '/images/duconder.png',
      url: 'http://localhost:3000/portfolio/3' // URL da página do projeto
    },
    {
      id: 4,
      name: 'OrangemHRM',
      description: 'Testes em Cypress',
      image: '/images/orangemhrm.png',
      url: 'http://localhost:3000/portfolio/4' // URL da página do projeto
    },
    {
      id: 5,
      name: 'JavaScript_StarWars',
      description: 'Projeto JavaScript',
      image: '/images/javascript_starwars.png',
      url: 'http://localhost:3000/portfolio/5' // URL da página do projeto
    },
    {
      id: 6,
      name: 'Starbugs',
      description: 'Testes Web utilizando Cucumber em linguagem Gherkin',
      image: '/images/starbugs.png',
      url: 'http://localhost:3000/portfolio/6' // URL da página do projeto
    },
  ];

  // <!-- Swiper JS -->

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"

    >
      {projects.map((project) => (
        <SwiperSlide key={project.id} className="project-slide">
        
          <Image
            src={project.image}
            alt={project.name}
            width={200}
            height={200}
            className="project-image"
          />

               {/* <h3 className="project-name">{project.name}</h3> 
          //  <p className="project-description">{project.description}</p> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}