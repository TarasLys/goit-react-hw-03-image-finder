import React from 'react';
import css from './Button.module.css';

export class Button extends React.Component {
  handleChange = event => {
    this.props.onClick(event.target.value);
  };
  render() {
    return (
      <div className={css.general}>
        <button
          className={css.button}
          onClick={this.handleChange}
          type="submit"
        >
          Load more
        </button>
      </div>
    );
  }
}
