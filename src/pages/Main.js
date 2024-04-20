import React, { Component } from "react";
import ListMenuUtama from "../data/ListMenuUtama";

class MainMenu extends Component {
  render() {
    return (
      <div>
        <center>
          <ListMenuUtama linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
        </center>
      </div>
    );
  }
}

export default MainMenu;
