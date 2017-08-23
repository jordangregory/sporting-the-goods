import React, { Component } from "react";

const styles = {
  background: {
    backgroundImage: "url(/outsideHockey.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttach: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
    maxWidth: "1500px"
  },
  paragraph: {
    backgroundColor: "#ffb81c",
    color: "#041E42",
    width: "50%",
    margin: "10px auto",
    padding: "20px"
  },
  about: {
    marginLeft: "10px"
  }
};

class About extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div class="aboutContainer">
          <h1 style={styles.about}>ABOUT</h1>
          <p style={styles.paragraph}>
            Top Shelf Equipment is a hockey equipment company founded by Jordan
            Gregory once he learned that he would have to create a fake
            ecommerce site. This company sells 9 total items, all of which were
            taken from other sites. Although there are selectors for color and
            size, you are actually not able to select those particular sizes or
            colors. This was to demonstrate how to make a select tag with
            options.
          </p>

          <p style={styles.paragraph}>
            Also, Jordan loves hockey, as hockey has played an important role is
            Jordan's life ever since he moved to Nashville. He has always been a
            loyal support of "his" teams, and now, is more loyal to the
            Nashville Predators than most of his other teams that he pulls for.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
