import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>
            <Link to="/">Reduxstagram</Link>
          </h1>
        </header>

        {React.cloneElement(this.props.children, this.props)}
      </section>
    );
  }
}
