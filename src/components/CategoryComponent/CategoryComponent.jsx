import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './CategoryComponent.css'

export default ({ data }) => {
  const history = useHistory();
  return (
    <Row style={{ margin: 10 }} className='category'>
      {
        data.map(cat => (
          <Col xs={12} lg key={cat._id}>
            <div className="cardCategory mt-2" onClick={() => history.push(`/cake/${cat._id}`)}>{ cat.name }</div>
          </Col>
        ))
      }
    </Row>
  )
}