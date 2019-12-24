import React from 'react';
import { useSelector } from 'react-redux';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';

export default () => {
  const { category } = useSelector(state => state.categoryStore);

  return (
    <>
      {
        category
          && <CategoryComponent data={ category } />
      }
    </>
  )
}