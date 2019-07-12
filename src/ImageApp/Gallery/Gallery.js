import React from 'react';
import PropTypes from 'prop-types';
import style from './gallery.module.css';
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery = ({ images, showLargeImage }) => (
  <ul className={[style.gallery]}>
    {images.map(image => (
      <li key={image.id}>
        <GalleryItem photo={image} showLargeImage={showLargeImage} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.shape([]).isRequired,
  showLargeImage: PropTypes.func.isRequired,
};

export default Gallery;
