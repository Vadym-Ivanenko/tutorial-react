import React from 'react';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handlelDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div>
          <button type="button" onClick={this.handleIncrement}>
            Rise
          </button>
          <button type="button" onClick={this.handlelDecrement}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
