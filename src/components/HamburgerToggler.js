import React from 'react';

function HamburgerToggler(props) {
  return (
    <div onClick={props.click} style={styles.button}>
      <div style={styles.line}/>
      <div style={styles.line}/>
      <div style={styles.line}/>
    </div>
  );
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
    borderRadius: '50px',
    backgroundColor: '#fff'
  }
}

export default HamburgerToggler;
