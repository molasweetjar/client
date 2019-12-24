import React from 'react';
import './Footer.css';
import { Image, Row, Col } from 'react-bootstrap'

export default () => (
  <div className="footer" style={{ margin: 10 }}>
    <h3 className="footerLogo">Mola Sweet Jar</h3>
    <Row>
      <Col style={{ display: 'flex', flexDirection: 'row' }}>
        <Image src='https://www.freepnglogos.com/uploads/new-instagram-logo-with-transparent-background-9.png' width={30} height={30} />
        <div className="text"><a href='http://instagram.com/molasweetjar' target='_'>@molasweetjar</a></div>
      </Col>
    </Row>
    <Row className='mt-1'>
      <Col style={{ display: 'flex', flexDirection: 'row' }}>
        <Image src='http://pngimg.com/uploads/whatsapp/whatsapp_PNG21.png' width={30} height={30} />
        <div className='text'><a href='http://api.whatsapp.com/send?phone=628117198809&text=saya%20tertarik%20nih%20sama%20kue%20yg%20ada%20diwebsitenya%20molasweetjar' target='_'>+62 811-7198-908</a> / <a href='http://api.whatsapp.com/send?phone=628117123007&text=saya%20tertarik%20nih%20sama%20kue%20yg%20ada%20diwebsitenya%20molasweetjar' target='_'>+62 811-7123-007</a></div>
      </Col>
    </Row>
    <Row className='mt-1'>
      <Col style={{ display: 'flex', flexDirection: 'row' }}>
        <Image src="https://i.pinimg.com/originals/29/93/fd/2993fd151e2e1cab871aec155e22cbcc.png" width={30} height={30} />
        <div className='text'>Jl.Sumpah Pemuda blok I No.7B RT.032 RW.009 Kel.Lorok Pakjo Kec.Ilir Barat I. Palembang Sumatera Selatan</div>
      </Col>
    </Row>
    <Row className='mt-1' style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div className="powered">powered by <a href='http://started.dreamcarofficial.com' target='_'>DreamCarOfficial</a></div>
    </Row>
  </div>
)