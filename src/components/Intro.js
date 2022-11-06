import { Row, Col, Container} from "react-bootstrap";

function IntroOne () {
    return(
        <div className="intro">
        <Container className="text-black text-center d-flex justify-content-center align-tems-center">
          <Row>
            <Col>
            <div className="intro-text">WELCOME</div>
            <div className="intro-text">TRAVELER</div>
            </Col>
          </Row>
        </Container>
      </div>  
    );
}

export default IntroOne;