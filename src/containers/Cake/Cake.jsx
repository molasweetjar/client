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
  const [ loading, setLoading ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getCakeByCategory();
  }, [])

  const getCakeByCategory = async () => {
    try {
      const { data } = await axios({ method: 'get', url: `/cake/${category}` })
      setCake(data.cake)
      setDescription(data.cake.description)
    } catch(err) { setError(err.response.data.msg) }
  }

  const changeDescription = (id) => {
    setLoading(true)
    axios({ method: 'post', url: `/cake/description/${id}`, data: { description }, headers: { token: localStorage.getItem('token') } })
      .then(_ => {
        dispatch(getCategory());
        setLoading(false)
      })
      .catch(err => setError(err.response.data.msg))
  }

  const deletePicture = async ( name ) => {
    setLoading(true)
    try { 
      await axios({ method: 'patch', url: `/cake/removepic/${ cake._id }`, data: { CakeImage: name }, headers: { token: localStorage.getItem('token') } }) 
      getCakeByCategory();
      setLoading(false)
    }
    catch(err) { setError(err.response.data.msg) }
  }

  if(error) return <h1>Error.. { error }</h1>

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
                  ? <CakeAdmin setDes={ description } changeDescription={ setDescription } id={ cake._id } descriptionProps={ changeDescription } refetchCake={ getCakeByCategory } loading={ loading } setLoading={ setLoading }/>
                  : <h6>{ cake.description }</h6>
              }
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', width: '100%', margin:2 }}>
              {
                cake.CakeImage
                  &&  cake.CakeImage.reverse().map((cake, i) => <CardCake key={i} data={ cake } removePicture={ deletePicture }/>)
              }
            </Row>
          </>
          : null
      }
    </>
  )
}