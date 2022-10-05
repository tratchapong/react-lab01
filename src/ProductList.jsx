import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Product from './Product'
import ProductCard from './ProductCard'
import TwModal from './ui/TwModal'

function ProductList() {
  const [data, setData] = useState([])
  const [selItem, setSelItem] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      setData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          data.map(el=>(
            <Product key={el.id} item={el} setSelItem={setSelItem} setOpen={setOpen} />
            ))
        }
      </div>
      <TwModal  open={open} doClose={()=>setOpen(false)} >
        <ProductCard item={selItem} />
      </TwModal>
    </>
  )
}

export default ProductList