import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import pixabayApi, { ITEMS_PER_PAGE } from '../../services/pixabay.api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

class ImageGalleryStatus extends PureComponent {
  state = {
    images: [],
    page: 1,
    totalHits: null,
    error: null,
    status: Status.IDLE,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    const { search } = this.props;
    const { page, loading } = this.state;
    if (prevProps.search === search && prevState.page === page) {
      return;
    }

    this.setState({
      loading: true,
    });
    pixabayApi
      .getSearchImages({ value: search, page })
      .then(data => {
        console.log(data)
        this.setState(p => {
          const images = prevProps.search === search
            ? [...prevState.images, ...data.hits]
            : data.hits;
          return ({
            images,
            totalHits: data.totalHits,
          });
        });
      })
      .catch((e) => {
        this.setState({
          error: e.message,
        });
      })
      .finally(() => this.setState({loading: false}))
  }

  calcPages = (totalHits) => Math.ceil(totalHits / ITEMS_PER_PAGE);

  handleMoreBtnClick = () => {
    this.setState(p => ({ page: p.page + 1 }));
  };

  render() {
    const { error, images, totalHits, page, loading } = this.state;
    const pages = this.calcPages(totalHits);

    return (
      <>
        {images.length === 0 && <p>No images</p>}
        {error && <p>{error} <button
          type='button'
          onClick={() => this.setState({ error: '' })}>Close Error</button></p>}
        {loading && <p>Loading...</p>}
        {!error && !loading && images.length > 0 && (
          <>
            {pages > page && <Button onClick={this.handleMoreBtnClick} />}
            <ImageGallery images={images} />
          </>
        )}
      </>
    );
  }
}

ImageGalleryStatus.propTypes = {
  search: PropTypes.string.isRequired,
};

export default ImageGalleryStatus;
