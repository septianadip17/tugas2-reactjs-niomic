import React, { Component } from "react";

class AboutUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      tentang: 'Warung Nusantara adalah restoran yang bernuansa masakan nusantara. Kami ada untuk membuat annda menikmati makanan khas nusantara. '
    }
  }
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p> {this.state.tentang}
        </center>
      </div>
    )
  }
}

export default AboutUs;
