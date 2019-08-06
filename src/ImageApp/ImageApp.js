import React, { Component } from 'react';
import axios from 'axios';
import styles from './imageApp.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Popup from './Popup/Popup';

class ImageApp extends Component {
  API_KEY = '12913894-cfe9c627517d4fd58155261a8';

  API_URL =
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';

  PAGE_NUMBER = 1;

  PER_PAGE = 12;

  imgTags = [];

  style = { possition: 'fixed', bottom: 0 };

  state = {
    value: '',
    images: [],
    isLargeImage: false,
    currentId: '',
  };

  fetcher = page => {
    axios
      .get(
        `${this.API_URL}${this.state.value}&page=${page}&per_page=${
          this.PER_PAGE
        }&key=${this.API_KEY}`,
      )
      .then(response =>
        this.setState(({ images }) => ({
          images: [...this.mapper(response.data.hits), ...images],
        })),
      )
      .then(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
  };

  counter = fn => {
    let nextPage = this.PAGE_NUMBER;
    return () => {
      nextPage += 1;
      fn(nextPage);
    };
  };

  showMore = this.counter(this.fetcher);

  onSubmit = value => {
    this.setState({ value, images: [] }, () => {
      this.fetcher(this.PAGE_NUMBER);
    });
  };

  mapper = images => {
    return images.map(
      ({
        id,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }) => ({
        id,
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
      }),
    );
  };

  showLargeImage = id => () => {
    this.setState({ isLargeImage: true, currentId: id });
    document.body.style = 'overflow: hidden';
  };

  closePop = e => {
    if (e.target.tagName === 'DIV' || e.code === 'Escape') {
      this.setState({
        isLargeImage: false,
      });
      document.body.style = 'overflow: vissible';
    }
  };

  render() {
    const { images, currentId, isLargeImage } = this.state;
    return (
      <>
        <div className={[styles.app]}>
          <SearchForm onSubmit={this.onSubmit} />
          <Gallery
            images={images}
            showLargeImage={this.showLargeImage}
            isLargeImage={isLargeImage}
          />
          {images.length > 0 && (
            <button type="button" onClick={this.showMore}>
              show more
            </button>
          )}
        </div>

        {isLargeImage && (
          <Popup
            img={images.filter(el => el.id === currentId)}
            closePop={this.closePop}
            closePop2={this.closePop2}
          />
        )}
      </>
    );
  }
}

export default ImageApp;
