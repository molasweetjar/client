import React, { useState, useEffect } from 'react';
import axios from '../../apis';
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import CardCake from '../../components/CardCake/CardCake';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../store/action'
import CakeAdmin from '../../components/Admin/CakeAdmin';

import './Cake.css'

export default () => {
  const { role } = useSelector(state => state.userStore.user)
  const { category } = useParams();
  const [ description, setDescription ] = useState('');
  const [ cake, setCake ] = useState({});
  const [ error, setError ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCakeByCategory = async () => {
      try {
        const { data } = await axios({ method: 'get', url: `/cake/${category}` })
        setCake(data.cake)
        setDescription(data.cake.description)
      } catch(err) { console.log(err.response.data.msg); setError(err.response.data.msg) }
    }
    getCakeByCategory();
  }, [])

  const changeDescription = (id) => {
    axios({ method: 'post', url: `/cake/description/${id}`, data: { description }, headers: { token: localStorage.getItem('token') } })
      .then(({data}) => {
        dispatch(getCategory())
      })
      .catch(err => console.log(err.response.data.msg))
  }

  if(error) return <h1>Error..</h1>

  return (
    <>
      {
        cake
          ?
          <>
            <Row style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
              <h3 style={{ textAlign: 'center' }}>{ cake.Category ? cake.Category.name : null }</h3>
              {
                (role === 'admin')
                  ? <CakeAdmin setDes={ description } changeDescription={ setDescription } id={ cake._id } descriptionProps={ changeDescription }/>
                  : <h6>{ cake.description }</h6>
              }
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', width: '100%', margin:2 }}>
              {
                cake.CakeImage
                  ?
                  cake.CakeImage.reverse().map((cake, i) => <CardCake key={i} data={ cake } />)
                  : null
              }
            </Row>
          </>
          : null
      }
    </>
  )
}