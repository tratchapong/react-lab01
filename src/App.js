import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './index.css';

export default function App() {
  const [data, setData] = useState([]);
  
  // NO CLEAN-UP : operate 2 times in StrictMode & 'race-condition" problem implicit
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const res = await axios.get('https://fakestoreapi.com/products/1')
  //     console.log(res.data)
  //     setData(res.data)
  //   }
  //   fetchData()
  // },[])

  // SIMPLE CLEAN-UP PATTERN : operate single time in StrictMode & 'race-condition' tolarate..
  // Key-point: clean-up will be call before UseEffect's body after first round
  // then the trigger (isCancel) will be set to the condition that will skip the if() block
  // Let's try to comment the Clean-up part (return part in useEffect)

  useEffect(() => {
    let isCancel = false;
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products/1');
      if (!isCancel) {
        alert('data Ready for settle');
        console.log(res.data);
        setData(res.data);
      }
    };
    fetchData();
    return (() => {
      isCancel = true;  
      console.log('User Canceling..');
    });
  }, []);

  return (
    <div>
      <h1>useEfect Clean-up Example</h1>
      <p style={{color: 'red'}}>Alert box must show only one time</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={()=>setData({name: 'Andy Default'})}>CLickMe</button>
    </div>
  );
}
