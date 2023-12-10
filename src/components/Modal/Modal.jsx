import React, { Component } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.onOverlayClick} className={css.overlay}>
          <div className={css.modal}>
            <button
              onClick={this.props.onCloseModal}
              className={css.closeModalBtn}
            >
              &times;
            </button>
            <img className={css.imageLarge} src={this.props.data} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
