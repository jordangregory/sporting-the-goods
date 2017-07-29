import React, { Component } from "react";
const styles = {
  background: {
    backgroundImage: "url(/outsideHockey.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttach: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.background}>
        <h1>Welcome to Sporting the Goods!</h1>
        <p>
          Here at Sporting the Goods, we're good at two thing: Sporting and The
          Goods
        </p>
      </div>
    );
  }
}

export default Home;
