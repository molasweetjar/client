import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signinUser } from '../../store/action'

export default () => {
  const [ request, setRequest ] = useState('');
  const [ password, setPassword ] = useState('');
  const { user, loading, error } = useSelector(state => state.userStore);
  const history = useHistory()
  const dispatch = useDispatch()


  return(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '25%', width: '80%', justifyContent: 'center' }}>
        <input type='text' placeholder='username/email' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ request } onChange={({ target }) => setRequest(target.value) }/>
        <input type='password' placeholder='password' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ password } onChange={({ target }) => setPassword(target.value)}/>
        <Button className='sm' style={{ marginTop: 2, borderRadius: '10px' }} onClick={() => dispatch(signinUser({ request, password }))}>Signin</Button>
        {
          loading ? <span style={{ color: 'green', textAlign: 'center' }}>Loading...</span>
            :
          error 
            ? <span style={{ color: 'red', textAlign: 'center' }}>{ error.data.msg }</span>
            : null
        }
        {
          user.role
            ? history.push('/')
            : null
        }
      </div>
    </div>
  )
}