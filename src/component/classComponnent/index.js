import React, { Component } from "react";

export default class Myclass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        nama: "mardi migrasi",
      },
      value: 0,
    };
  }

  render() {
    const plus = () => {
      this.setState({ value: this.state.value + 1 });
    };
    const minus = () => {
      if (this.state.value <= 0) {
      } else {
        this.setState({ value: this.state.value - 1 });
      }
    };
    const rubah = () => {
      const nama =
        this.state.data.nama === "Hii I'm jacob"
          ? "hallo mardi migrasi"
          : "Hii I'm jacob";
      this.setState({
        data: {
          ...this.state.data,
          nama: nama,
        },
      });
    };
    return (
      <div>
        <h3>{this.props.text}</h3>
        <button onClick={minus}>-</button>
        <span>{this.state.value}</span>
        <button onClick={plus}>+</button>
        <h3>{this.state.data.nama}</h3>
        <button onClick={rubah}>Ubah</button>
      </div>
    );
  }
}
