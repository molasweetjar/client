import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'

export default ({ data }) => {
  const { user } = useSelector (state => state.userStore)

  return(
    <Col xs={6} xl={3}>
      <Card style={{ display: "flex", flexDirection: 'column' }}>
        <Card.Img variant="top" src={data} width='50%'/>
        {
          (user.role === 'admin')
            && <Button> Remove </Button>
        }
      </Card>
    </Col>
  )
}