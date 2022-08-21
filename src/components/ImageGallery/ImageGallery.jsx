import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends PureComponent {
  state = {
    visibilityBtn: false,
  };

  render() {
    const { images } = this.props;

    return (
      <ul className={s.container}>
        {images.map(img => {
          const { id, webformatURL, largeImageURL, tags } = img;
          console.log(img)
          return (
            <ImageGalleryItem
              key={id}
              tags={tags}
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
