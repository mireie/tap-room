import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import KegDetail from "./KegDetail";
import KegList from "./KegList";
import KegControl from "./KegControl";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container className="mt-3">
        <Row>
          <Col>
          <KegControl />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
