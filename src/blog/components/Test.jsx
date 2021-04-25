import { Component } from "react";

export class Test extends Component {
  state = {
    name: "salama",
  };

  componentDidMount() {}
  componentWillUnmount() {}

  handleClick() {
    this.setState({ ...this.state, name: "ahmed" });
  }
  render() {
    return (
      <>
        <h1>Hello from class component</h1>
        {this.state.name}
        prop {this.props.hamada}
        <button onClick={() => this.handleClick()}>Click me</button>
      </>
    );
  }
}
