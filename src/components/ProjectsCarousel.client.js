// src/components/ProjectsCarousel.client.js
'use client'; // Isso marca o componente como Client Component

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

export default function ProjectsCarousel() {
  const projects = [
    { id: 1, name: 'Bootcamp', description: 'Analista QA foco em testes manuais', image: '/images/bootcamp.jpg' },
    { id: 2, name: 'Swaglab', description: 'Automação em Cypress e2e', image: '/images/swaglab.jpg' },
    { id: 3, name: 'Duconder', description: 'Voluntário testes e2e, manual', image: '/images/duconder.jpg' },
    { id: 4, name: 'OrangemHRM', description: 'Testes em Cypress', image: '/images/orangemhrm.jpg' },
    { id: 5, name: 'JavaScript_StarWars', description: 'Projeto JavaScript', image: '/images/javascript_starwars.jpg' },
    { id: 6, name: 'L5Network', description: 'Testes de navegação e interação no site e2e', image: '/images/l5network.jpg' },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="projects-carousel"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id} className="project-slide">
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={300}
            className="project-image"
          />
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}