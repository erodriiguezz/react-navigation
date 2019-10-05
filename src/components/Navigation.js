import React, { Component } from 'react';
import { Link } from 'react-scroll';

// navigation links component
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
        <li key={key}>
          <Link
            onClick={this.props.click}
            activeClass="active"
            to={page}
            spy={true}
            smooth={true}
            duration={1000}
          >
            {page}
          </Link>
        </li>
      )
    });

    return (
      <ul>
        {li}
      </ul>
    );
  }
}

// menu button component
function HamburgerToggler(props) {
  const { button, line } = styles;
  return (
    <div onClick={props.click} style={button}>
      <div style={line}/>
      <div style={line}/>
      <div style={line}/>
    </div>
  );
}

// backdrop component
function Backdrop(props) {
  return (
    <div style={styles.backdrop} onClick={props.click}/>
  );
}

// navigation component
export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  clickHandler() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  closeDrawer() {
    this.setState({
      clicked: false
    });
  }

  render() {
    let classHandler = 'links';
    let backdrop;

    if (this.state.clicked) {
      classHandler = 'links'.concat(' show');
      backdrop = <Backdrop click={this.clickHandler} />;
    }

    return (
      <div className='navigation'>
        <div className='container'>
          <div className=''>
            <h3>COMPANY</h3>
          </div>
          <div className='divider' />
          <div className={classHandler}>
            <LinksGenerator click={this.closeDrawer}/>
          </div>
          <div className='hamburger-toggler'>
            <HamburgerToggler click={this.clickHandler}/>
          </div>
          {backdrop}
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    height: '20px',
    width: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: 'transparent',
    border: 'none',
    padding: 0,
    boxSizing: 'border-box'
  },
  line: {
    height: '3px',
    width: '20px',
    borderRadius: '100px',
    backgroundColor: '#fff'
  },
  backdrop: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1
  }
}
