import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return
  // }

  render() {
    const {webformatURL} = this.props;
    return (
      <li className={s.container}>
        <img className={s.image} src={webformatURL} alt="Picture" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
