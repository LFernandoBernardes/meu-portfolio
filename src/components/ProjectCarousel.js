// components/ProjectCarousel.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

export default function ProjectCarousel({ images, video }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="project-carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Imagem ${index + 1} do projeto`}
            width={800}
            height={450}
            className="carousel-image"
          />
        </SwiperSlide>
      ))}
      {video && (
        <SwiperSlide>
          <video controls width="800" height="450">
            <source src={video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </SwiperSlide>
      )}
    </Swiper>
  );
}