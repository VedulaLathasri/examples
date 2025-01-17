import React, { useState } from 'react'

function FunctionalCounter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={setCount( count + 1)}></button>
        <h1> FunctionalCounter {count } times </h1>
        </div>
  )
}

export default FunctionalCounter