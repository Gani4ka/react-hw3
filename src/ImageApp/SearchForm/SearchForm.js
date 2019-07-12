import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './searchForm.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  onChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={[style.searchForm]} onSubmit={this.onSubmit}>
        <input
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="search image..."
          autoComplete="off"
        />
      </form>
    );
  }
}

export default SearchForm;
