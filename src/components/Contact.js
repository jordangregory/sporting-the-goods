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
class Contact extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div className="contactContainer">
          <h1>CONTACT US:</h1>
          <h2>Sporting the Goods</h2>
          <h2>Address:</h2>
          <h3>
            613 Ewing Ave.<br />Nashville, TN 37203
          </h3>

          <h2>Phone:</h2>
          <h3>803-940-1251</h3>

          <h2>Email:</h2>
          <h3>jordan@topshelfequipment.com</h3>
        </div>
      </div>
    );
  }
}

export default Contact;
