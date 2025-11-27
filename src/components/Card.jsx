import { use, useState } from "react"

const Card = ({product}) => {


    return (
        <>
        <div className='min-w-[300px] w-full p-2.5 border border-gray-300 rounded-md shadow-md'>
            <img className='w-full h-[250px] object-contain' src={product.image ? product.image : product.images[0]} alt="" />
            <h1 className='text-2xl font-semibold mt-3'>{product.title}</h1>
            <p className='text-sm my-4'>{product.description}</p>
            <p className='text-red-600 font-medium'>{product.currency}{product.price}</p>
        </div>
        </>
    )
}

export default Card