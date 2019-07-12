import React from 'react';
import PropTypes from 'prop-types';
import style from './galleryItem.module.css';

const { photoCard, stats, statsItem, fullscreenButton } = { ...style };

const GalleryItem = ({ photo, showLargeImage }) => {
  return (
    <div className={photoCard}>
      <img src={photo.webformatURL} alt="" />

      <div className={stats}>
        <p className={statsItem}>
          <i className="material-icons">thumb_up</i>
          1108
        </p>
        <p className={statsItem}>
          <i className="material-icons">visibility</i>
          320321
        </p>
        <p className={statsItem}>
          <i className="material-icons">comment</i>
          129
        </p>
        <p className={statsItem}>
          <i className="material-icons">cloud_download</i>
          176019
        </p>
      </div>

      <button
        type="button"
        className={fullscreenButton}
        onClick={showLargeImage(photo.id)}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

GalleryItem.propTypes = {
  photo: PropTypes.shape({}).isRequired,
  showLargeImage: PropTypes.func.isRequired,
};

export default GalleryItem;
