import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from '../../apis'
import { Spinner } from 'react-bootstrap'
import './CakeAdmin.css'

export default ( props ) => {
  const [ file, setFile ] = useState('');
  const { category } = useParams();

  const uploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file)
    props.setLoading(true)
    try { 
      await axios({ method: 'patch', url: `/cake/${ category }`, headers: { token: localStorage.getItem('token') }, data: formData }) 
      props.refetchCake()
      setFile('')
      props.setLoading(false)
    }
    catch(err) { console.log(err.response.data.msg) }
  }
  
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input style={{ borderRadius: '10px'}} value={ props.setDes } onChange={({ target }) => props.changeDescription(target.value)} placeholder='new  description' />
        <div className='btnSave'><a style={{ fontSize: 10, color: "blue" }} onClick={() => props.descriptionProps(props.id)}>Save Change</a></div>
      </div>
      <form id='formPicture' onSubmit={e => uploadImage(e)} encType="multipart/form-data">
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'ceneter' }}>
          <input type='file' onChange={({ target }) => setFile(target.files[0])}/>
          {
            props.loading
              ? <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              :
              file
                && <input type='submit' value='add picture' />
          }
        </div>
      </form>
    </>
  )
}