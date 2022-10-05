import React from 'react'

function ProductCard(props) {
    const {item} = props
  return (
    <div className="rounded overflow-hidden shadow-lg max-h-fit p-5 bg-pink-200">
    <div className=" p-2 h-52 cursor-pointer" >
      <img className="w-4/5 h-full object-contain mx-auto min-w-[200px]" src={item.image} alt={item.category} />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 ">{item.title}</div>
      <div className="inline-block bg-gray-200 rounded-full px-3 text-xs font-semibold text-gray-700 mr-2 mb-2">
        #{item.category}
      </div>
      <p className="text-gray-700 text-base">
        {item.description}
      </p>
    </div>
    <div className="px-6 py-2">
      <p className="border text-2xl rounded-lg text-center bg-slate-200 text-slate-700 "> ${item.price} </p>
    </div>
  </div>
  )
}

export default ProductCard