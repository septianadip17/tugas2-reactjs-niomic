import React, { Component } from "react";
import ListMenuUtama from "../data/ListMenuUtama";

class MainMenu extends Component {
  render() {
    return (
      <div>
        <ListMenuUtama linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
      </div>
    );
  }
}

export default MainMenu;
