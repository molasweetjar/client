import React from 'react';

import { Spinner } from 'react-bootstrap'

export const LoadingComponent = () => (
  <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
)