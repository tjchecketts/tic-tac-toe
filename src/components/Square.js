import React from 'react'

const Square = (props) => {
  return (
    // works: onClick={ () => { props.onClick() } }
    // doesn't work onClick={props.onClick()} 
    <button className="square" onClick={ props.onClick }>
      { props.value }
    </button>
  )
}

export default Square