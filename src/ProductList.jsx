import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'

function ProductList() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      setData(res.data)
    }
    fetchData()
  }, [])
  

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {
        data.map(el=>(
          <Product key={el.id} item={el} />
        ))
      }

    </div>
  )
}

export default ProductList