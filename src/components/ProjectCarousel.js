// components/ProjectCarousel.js
'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';

export default function ProjectCarousel({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para armazenar a imagem selecionada

  // Função para abrir o modal com a imagem clicada
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper_pagina"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Imagem ${index + 1} do projeto`}
              width={800}
              height={600}
              className="carousel-image"
              onClick={() => openModal(image)} // Abre o modal ao clicar na imagem
              style={{ cursor: 'pointer' }} // Altera o cursor para indicar que a imagem é clicável
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal para exibir a imagem expandida */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <div
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              position: 'relative',
            }}
          >
            <Image
              src={selectedImage}
              alt="Imagem expandida"
              width={800}
              height={600}
              style={{ objectFit: 'contain' }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'yellow',
                color: 'blue',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                alignItems:'center',
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}