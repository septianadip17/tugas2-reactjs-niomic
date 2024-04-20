import React, { Component } from "react";

class ListMenuUtama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.list,
    };
  }
  render() {
    return (
      <div>
        <h1>
          <center>Selamat Datang di Warung Nusantara</center>
        </h1>
        <img src={this.props.linkGambar} alt="Masakan Nusantara" width="600" />
      </div>
    );
  }
}

export default ListMenuUtama;
