import React from 'react'
import { setConstantValue } from 'typescript'
import { post } from '../interfaces'

function Filters({ posts, setPosts }:any) {

  const sortByPrice = (list:Array<any>, dir:string) => {
    const sortedList = list.sort((a:post, b:post) => (
      dir==='ASC' ? a.price - b.price : b.price - a.price
    ))
    setPosts([...sortedList])
  }
  
  return <>
    <button onClick={() => sortByPrice(posts, 'ASC')}>sort by price ASC</button>
    <button onClick={() => sortByPrice(posts, 'DESC')}>sort by price DES</button>
  </>
}

export default Filters