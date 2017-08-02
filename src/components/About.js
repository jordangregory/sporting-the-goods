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

class About extends Component {
  render() {
    return (
      <div style={styles.background}>
        <h1>ABOUT</h1>
        <p>
          Sporting the Goods is a hockey equipment company founded by Jordan
          Gregory once he learned that he would have to create a fake ecommerce
          site. This company sells 9 total items, all of which were taken from
          other sites. Although there are selectors for color and size, you are
          actually not able to select those particular sizes. This was to
          demonstrate how to make a select tag with options.
        </p>
        <p>
          Also, there is actually no way to purchase these items, as this is
          part of hard mode. Jordan has never attempted hard mode due to the
          fact that he feels like coding is above his capabilities, and
          therefore, shies aways from things that will discourage him even more.
          Jordan has learned a ton about coding in the past 11 weeks, but
          defintiely feels he's the absolute worst student in the class when it
          comes to competency. He is scared that he will not get a job,
          accumulate fifteen thousand dollars in debt, and still have to resort
          to getting a job he ultimately hates because he wasn't good enough to
          get an actual job in programming. He doesn't know if he's made a
          mistake or not, but he knows his only shot at getting an actual job in
          coding will be a combination of the "right time, right place" and his
          ability to show that he is a great communicator and willing to
          continue to learn, given the opportunity.
        </p>
        <p>
          Also, Jordan loves hockey, as hockey has played an important role is
          Jordan's life ever since he moved to Nashville. He has always been a
          loyal support of "his" teams, and now, is more loyal to the Nashville
          Predators than most of his other teams that he pulls for. This last
          bit about Jordan's love for hockey is to distract you from the sad
          state of affairs Jordan described in the first few lines of this
          paragraph.
        </p>
      </div>
    );
  }
}

export default About;
