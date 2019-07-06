import React from 'react';

const CoolButton = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>{props.children}</button>
  )
}

export default CoolButton;