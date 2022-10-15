import React,{useState, useEffect } from 'react'
import axios from 'axios';

function Product(props) {

  const [data, setData] = useState([]);
  console.log('Product Start..')
  
  useEffect(() => {
    console.log('useEffect start..')
    let isCancel = false;
    const fetchData = async (id) => {
      const res = await axios.get('https://fakestoreapi.com/products/' + id);
      if (!isCancel) {
        // alert('data Ready for settle');
        console.log(res.data);
        setData(res.data);
      }
    };
    fetchData(props.id);
    return (() => {
      isCancel = true;  
      console.log('User Canceling..');
    });
  }, [props.id]);


  return (
    <div>
      {console.log('Product return..')}
      <p style={{color: 'red'}}>Product : {props.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Product