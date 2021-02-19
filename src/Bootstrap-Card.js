import React from 'react'
// Import Component from Bootstrap
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
// Import Image
import img1 from './picture/img-1.jpg';
import img2 from './picture/img-2.jpg';
import img3 from './picture/img-3.jpg';

let Title = [
  {
    Id:1,
    title:'CSS Framework',
    keterangan:'Pelajari learning path CSS Framework, cara kerjanya dan Buat Desaign Portofolio Milikmu.',
    img:img1
  },
  {
    Id:2,
    title:'React.Js',
    keterangan:'Pelajari libarary java script paling populer di github yang dikembangkan oleh Facebook.',
    img:img2
  },
  {
    Id:3,
    title:'Vue.Js',
    keterangan:'Pelajari framework populer di github yang dikembangkan oleh mantan engineer Google',
    img:img3
  }
]
//Card Bootstrap
//margin dan padding di sini untuk card
class CardBootstrap extends React.Component{
  render(){
    return(
      <>
        <Card class='card' border="dark" style={{'padding':'5px'}}>
          <Card.Img variant="top" 
          src={this.props.img}
          style={{'margin':'0px'}}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.keterangan}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>>
          </Card.Body>
        </Card>
      </>
    );
  }
}

class ContainerBootstrap extends React.Component{
  render(){
    return(
        <>
          <Container class='borderblack'>
              <Row class='borderblack' style={{'margin':'5px'}}>
                <>
                  {Title.map(el => {
                    return(
                      <Col sm class='borderblack' style={{'margin': '2px', 'padding':'auto','width':'auto'}}>                  
                        <CardBootstrap class='border-black' title={el.title} keterangan={el.keterangan} img={el.img}/>
                      </Col>
                    )
                  })}
                </>
              </Row>
          </Container>
        </>
    )
  }
}

/*
const ContainerBootstrap = () => {
    return(
        <>
        <Container class='borderblack'>
            <Row class='borderblack' style={{'margin':'5px'}}>
                <Col sm class='borderblack' style={{'margin': '2px', 'padding':'auto','width':'auto'}}>                  
                  <CardBootstrap class='border-black'/>
                </Col>
                <Col sm class='borderblack' style={{'margin': '2px' }}>
                  <CardBootstrap class='border-black'/>
                </Col>
                <Col sm class='borderblack' style={{'margin': '2px' }}>
                  <CardBootstrap class='border-black'/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
*/


class Cardcontainer extends React.Component{
    render(){
        return(
            <ContainerBootstrap/>
        )
    }
}
export default Cardcontainer;