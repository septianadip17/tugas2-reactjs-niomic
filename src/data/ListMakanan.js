import React, { Component } from "react";

class ListMakanan extends Component {
  render() {
    return (
      <div>
        <h1>
          <center>Selamat Datang di Warung Nusantara</center>
        </h1>
        <center>
          <img src={this.props.linkGambar} alt="Masakan Nusantara" width="600" />
        </center>
      </div>
    );
  }
}

export default ListMakanan;
