import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './popup.module.css';

class Popup extends Component {
  static propTypes = {
    closePop: PropTypes.func.isRequired,
    img: PropTypes.shape([]).isRequired,
  };

  closePop = this.props.closePop;

  componentDidMount() {
    window.addEventListener('keydown', this.closePop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closePop);
  }

  render() {
    const { closePop, img } = this.props;

    return (
      <div className={[styles.backdrop]} onClick={closePop} role="banner">
        <div>
          <img src={img[0].largeImageURL} alt="img" />
        </div>
      </div>
    );
  }
}

export default Popup;
