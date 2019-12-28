import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signinUser, signinGOOGLE } from '../../store/action';
import { GoogleLogin } from 'react-google-login';
import { Spinner } from 'react-bootstrap';

export default () => {
  const [ request, setRequest ] = useState('');
  const [ password, setPassword ] = useState('');
  const { user, loading, error } = useSelector(state => state.userStore);
  const [ errors, setErrors ] = useState('');
  const history = useHistory();
  const dispatch = useDispatch()

  const onSigninsuccess = async ( google ) => {
    const id_token = google.getAuthResponse().id_token;
    await dispatch(signinGOOGLE({ id_token }))
  }

  const onSigninerror = (errorFromGoogle) => {
    setErrors(errorFromGoogle)
  }

  return(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '25%', width: '80%', justifyContent: 'center' }}>
        <input type='text' placeholder='username/email' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ request } onChange={({ target }) => setRequest(target.value) }/>
        <input type='password' placeholder='password' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ password } onChange={({ target }) => setPassword(target.value)}/>
        <Button className='sm' style={{ marginTop: 2, borderRadius: '10px' }} onClick={() => dispatch(signinUser({ request, password }))}>Signin</Button>
        <div style={{ marginTop: '10px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GoogleLogin 
            clientId="93381607454-qq6siufclno5e2u3v3ps74nr0dnf3ev9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onSigninsuccess}
            onFailure={onSigninerror}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
          <span style={{ fontSize: '12px', marginTop: '10px' }}>dont have account? <a href="#" onClick={() => history.push('/signup')}>Click Here!</a></span>
        </div>
        {
          loading ? <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </div>
            :
          error 
            && <span style={{ color: 'red', textAlign: 'center' }}>{ error.data.msg }</span>
        }
        {
          errors
            && <span style={{ color: 'red', textAlign: 'center' }}>{ errors }</span>
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