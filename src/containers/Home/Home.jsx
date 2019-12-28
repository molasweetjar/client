import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { useSelector } from 'react-redux';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent'
import { LoadingComponent } from '../../components/SpamComponent'

import './Home.css'

export default () => {
  const { category, loading, error } = useSelector(state => state.categoryStore)

  if(loading) return <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingComponent /></div>
  if(error) return <h1>Error...</h1>

  return (
    <>
      <Carousel />
      { category  ? <CategoryComponent data={ category }/> : null }
    </>
  )
}