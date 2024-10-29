import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div className="mt-20">
    <div className="card bg-base-100 w-60 shadow-xl hover:scale-110 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer p-3 rounded-lg border-[2px] hover:bg-pink-400 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
