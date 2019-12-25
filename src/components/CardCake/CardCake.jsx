import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'

export default ( props ) => {
  const { user } = useSelector (state => state.userStore)

  return(
    <Col xs={6} xl={3}>
      <Card style={{ display: "flex", flexDirection: 'column' }}>
        <Card.Img variant="top" src={ props.data } width='50%'/>
        {
          (user.role === 'admin')
            && <Button onClick={_ => props.removePicture( props.data )}> Remove </Button>
        }
      </Card>
    </Col>
  )
}