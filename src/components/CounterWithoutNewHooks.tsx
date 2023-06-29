/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

interface ExampleState {
  count: number;
}

class CounterWithoutNewHooks extends React.Component<{}, ExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Usando classes</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clique aqui
        </button>
      </div>
    );
  }
}

export default CounterWithoutNewHooks;
