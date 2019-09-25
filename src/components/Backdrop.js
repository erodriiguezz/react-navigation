import React from 'react';

function Backdrop(props) {
  return (
    <div style={styles.backdrop} onClick={props.click}/>
  );
}

const styles = {
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

export default Backdrop;
