import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { useSelector } from 'react-redux';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent'

import './Home.css'

export default () => {
  const { category, loading, error } = useSelector(state => state.categoryStore)

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error...</h1>

  return (
    <>
      <Carousel />
      { category  ? <CategoryComponent data={ category }/> : null }
    </>
  )
}