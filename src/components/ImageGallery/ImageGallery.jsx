import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(el => (
        <ImageGalleryItem key={el.id} images={el} onOpenModal={onOpenModal} />
      ))}
    </ul>
  );
};
