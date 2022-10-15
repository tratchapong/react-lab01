import React, { useEffect, useState } from 'react';

import './index.css';
import Product from './Product';

export default function App() {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(1)


  const hdlClick = id => {
    setShow(prv => !prv)
    setId(id)
  }

  return (
    <div>
      <h1>useEfect Clean-up Example</h1>

      <button onClick={()=>hdlClick(1) }>Product 1</button>
      <button onClick={()=>hdlClick(2) }>Product 2</button>
      <hr />
      {show && <Product id={id} />}
    </div>
  );
}
