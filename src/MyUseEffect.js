// With <StrictMode> useEffect will call network api twice (in Development mode) 
// for checking 'race-condition' problem
// This clean-up pattern can guarantee useEffect will not setData when user cancel
// when user cancel then ignore=false then skip setData()

// resource :
// https://www.developerway.com/posts/how-to-fetch-data-in-react
// https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data

// let's try by setup throttle Chrome Dev Tools : Network : slow 3G
// then delete clean-up (return part) in useEffect
// then try to click "Fetch user" button twice or more

import React, { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false)
  console.log('START..')

  useEffect(() => {
    console.log('useEffect start..')
    let ignore = false;
    console.log(ignore)
    const dataFetch = async (id) => {
      const data = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
      ).json();

      if (!ignore) {
        console.log(data); // inside if block will run single-time
        setData(data);
      }
    };
    trigger ? dataFetch(1) : dataFetch(2);
    return () => {
      console.log('useEffect RETURN run...');
      ignore = true;    // clean-up guarantee single operate (setData ) when user cancel 
                        // (...send more than one network request in a time )
      console.log(ignore)
    };
  }, [trigger]);
  
  
  return (
    
    <div>
      {console.log('in Painting...')}
      <h1>Hello StackBlitz!</h1>
      <button onClick={()=>setTrigger(prv=>!prv)} >Fetch user..</button>
      <p>{JSON.stringify(data)}</p>
      {/* {data?.map((el) => (
        <p key={el.id}>{JSON.stringify(el)}</p>
      ))} */}

    </div>
  );
}
