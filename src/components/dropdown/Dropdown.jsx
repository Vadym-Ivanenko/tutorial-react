import React, { Component } from 'react';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'hide' : 'show'}
        </button>
        {this.state.visible && (
          <div className="Dropdown__menu">Shoved menu</div>
        )}
      </div>
    );
  }
}
