import React from 'react';

const Greeter = props => {
  return (
    <>
      <h1 className="shadow-sm m-4 border rounded p-2">{props.phrase}, {props.name}</h1>
    </>
  )
}

export default Greeter;