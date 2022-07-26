import React from 'react'
import './button.css'
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import top1 from '../../assets/top1.png'

const Button = ({ text }) => {
  return (
    <Container>
        <Col xs={3}>
        <div className='recta'><img src={top1} style={{ width: "180px", top: "20px", left: "25px" , position:"absolute"}}/></div>
          <div className= 'text'>Product title</div>
          <div className= 'text'>Price</div>
        </Col>
      </Container>
  )
}

export default Button