import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, onOpenModal }) => {
  return (
    <div>
      <li
        className={css.imageGalleryItem}
        key={images.id}
        onClick={() => onOpenModal(images.largeImageURL)}
      >
        <img
          className={css.imageGalleryItemImage}
          src={images.webformatURL}
          alt={images.tags}
        />
      </li>
    </div>
  );
};
