import React from 'react'

const Button = ({button,onClick}) => {
  return (
    <div>
      <button onClick={onClick}>
        {button}
        {onClick}
      </button>
    </div>
  );
}

export default Button
