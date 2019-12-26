import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import axios from '../../apis'

export default () => {
  const history = useHistory();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState([]);

  const signupAction = async () => {
    setLoading(true)
    try {
      const { data } = await axios({ method: 'post', url: '/signup', data: { username, password, email } })
      if(data.user) history.push('/signin')
    } catch(err) { setError(err.response.data.error); setLoading(false); setTimeout(() => setError(''),2000) }
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '25%', width: '80%', justifyContent: 'center' }}>
        <input type='text' placeholder='username' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ username } onChange={({ target }) => setUsername(target.value) }/>
        <input type='email' placeholder='username@example.com' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ email } onChange={({ target }) => setEmail(target.value) }/>
        <input type='password' placeholder='password' style={{ textAlign: 'center', marginTop: 2, borderRadius: 10 }} value={ password } onChange={({ target }) => setPassword(target.value)}/>
        <Button className='sm' style={{ marginTop: 2, borderRadius: '10px' }} onClick={signupAction}>SignUp</Button>
        <div style={{ marginTop: '10px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', marginTop: '10px' }}>allready have account? <a href="#" onClick={() => history.push('/signin')}>Click Here!</a></span>
          {
            loading
              ? <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              :
            error
              && error.map((err, i) => <span key={ i } style={{ color: 'red', fontSize: '12px' }}>{ err }</span>)
          }
        </div>
      </div>
    </div>
  )
}