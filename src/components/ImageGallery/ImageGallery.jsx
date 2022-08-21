import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

class ImageGallery extends PureComponent {
  state = {
    visibilityBtn: false,
  };

  render() {
    const { visibilityBtn } = this.state;
    const { images } = this.props;

    return (
      <ul className={s.container}>
        {images.map(img => {
          const { id, webformatURL, largeImageURL } = img;
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />);
        })}
        {/*{visibilityBtn && <Button />}*/}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(ImageGalleryItem.propTypes)),
};

export default ImageGallery;
