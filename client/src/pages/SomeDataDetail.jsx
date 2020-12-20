import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    API.getOneData(id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <h1>This someString</h1>
            <p>{data.someString}</p>
            <h1>This someNumber</h1>
            <p>{data.someNumber}</p>
            <h1>This someArray</h1>
            <p>{data.someArray}</p>

        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to all some data</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
