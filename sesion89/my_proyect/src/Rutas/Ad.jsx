import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useGetProducts'

export default function Ad() {
const {category} = useParams()
const {
    data
 } = useFetch(`https://fakestoreapi.com/products/category/${category}`)
  return (
    <div className='text-white'>{category}
    {data?.map(i=>(
        <p key={i.id}>
            {i.title}
        </p>
    ))}
    </div>
  )
}
