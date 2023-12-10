import React, { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(event.target.elements.searchPost.value);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <header className={css.searchbar}>
          <form onSubmit={this.handleSubmit} className={css.searchForm}>
            <button type="submit" className={css.searchFormButton}>
              <span className={css.searchFormButtonLabel}>Search</span>
            </button>

            <input
              className={css.searchFormInput}
              type="text"
              name="searchPost"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
