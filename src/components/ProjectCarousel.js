// components/ProjectCarousel.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';




export default function ProjectCarousel({ images }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true} // Ativa o loop (repetição contínua)
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]} // Adicione os módulos
      className="project-carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Imagem ${index + 1} do projeto`}
            width={500}
            height={350}
            className="carousel-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
