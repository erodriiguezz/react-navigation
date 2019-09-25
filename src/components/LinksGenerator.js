import React, {Component} from 'react';
import ReactScrollLink from './ReactScrollLink';

class LinksGenerator extends Component {
  constructor() {
    super();

    this.state = {
      pages: [
        'Home',
        'About',
        'Services',
        'Contact'
      ]
    }
  }

  render() {
    let li = this.state.pages.map((page, key) => {
      return (
        <li key={key}><ReactScrollLink click={this.props.click} page={page}/></li>
      )
    });

    return (
      <ul>
        {li}
      </ul>
    );
  }
}

export default LinksGenerator;
