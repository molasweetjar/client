import React, { useState, useEffect } from 'react';
import axios from '../../apis';
import { LoadingComponent } from '../../components/SpamComponent';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default () => {
  const [ testimony, setTestimony ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const { user } = useSelector(state => state.userStore)

  useEffect(() => {
    const fetchTesti = async () => {
      setLoading(true)
      try {
        const { data } = await axios({ method: 'get', url: '/testi' })
        setTestimony(data.testi);
        setLoading(false)
      } catch(err) {
        setLoading(false);
        setError(err.response.data.msg);
      }
    }
    fetchTesti();
  }, [])

  if(loading) return <LoadingComponent />
  if(error) return <h1>error { error }</h1>


  return (
    <Row style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
      {
        testimony
          &&  testimony.map(test => (
                <Col xs={6} xl={3}>
                  <Card key={ test._id } style={{ display: "flex", flexDirection: 'column', marginTop: 2 }}>
                    <Card.Img variant="top" src={ test.testi_image } width='50%'/>
                    {
                      (user.role === 'admin')
                        && <Button> Remove </Button>
                      }
                  </Card>
                </Col>
              ))
      }
    </Row>
  )
}