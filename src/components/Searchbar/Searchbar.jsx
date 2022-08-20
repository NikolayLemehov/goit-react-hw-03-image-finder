import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css'

class Searchbar extends Component {
  render() {
    return (
      <header className={s.container}>
        <form className={s.form}>
          <button type="submit" className={s.btn}>
            <span className={s.btnLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {};

export default Searchbar;
