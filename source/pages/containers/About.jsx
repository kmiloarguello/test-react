import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <section name="about">
        <h1>About</h1>
        <Link to=".">
          Go to Home
        </Link>
        <link to="random">
          Go to random
        </link>
      </section>
    )
  }
}

export default About;