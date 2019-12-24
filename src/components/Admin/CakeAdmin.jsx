import React from 'react';

export default ( props ) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input style={{ borderRadius: '10px'}} value={ props.setDes } onChange={({ target }) => props.changeDescription(target.value)} placeholder='new  description' />
        <div className='btnSave'><a style={{ fontSize: 10, color: "blue" }} onClick={() => props.descriptionProps(props.id)}>Save Change</a></div>
      </div>
      <form style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <input type='file' />
        <input type='submit' value='add picture' />
      </form>
    </>
  )
}