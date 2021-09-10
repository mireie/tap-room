import React from "react";
import { Container, Row } from "react-bootstrap"
import KegControl from "./KegControl";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container className="mt-3">
        <Row>

          <KegControl />

        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
