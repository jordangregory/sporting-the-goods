import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  background: {
    backgroundImage: "url(/outsideHockey.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttach: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  },
  gloveImage: {
    height: 300,
    width: 300,
    padding: 10,
    marginLeft: 20,
    border: "1px solid black",
    background: "black",
    borderRadius: 50
  },
  stickImage: {
    height: 300,
    width: 300,
    padding: 10,
    marginLeft: 20,
    border: "1px solid black",
    background: "black",
    borderRadius: 50
  },
  jerseyImage: {
    height: 300,
    width: 300,
    padding: 10,
    marginLeft: 20,
    border: "1px solid black",
    background: "black",
    borderRadius: 50
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

        <div>
          <div className="stickHomePage">
            <Link to="/gloves">
              <img style={styles.gloveImage} src="gloves.jpg" alt="gloves1" />
            </Link>
          </div>

          <div className="stickHomePage">
            <Link to="/sticks">
              <img style={styles.stickImage} src="stick1.jpg" alt="stick1" />
            </Link>
          </div>

          <div className="jerseysHomePage">
            <Link to="/jerseys">
              <img
                style={styles.jerseyImage}
                src="jerseyStyle1.jpg"
                alt="jersey1"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
