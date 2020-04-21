import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  Container,
  Button,
} from "reactstrap";

import { Row, Col } from 'antd';

import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <Container className="mt--7" fluid>
      <Row>
        <Col span={24}>
          <Card>
            <CardBody>
              <CardTitle>Welcome to Mojaloop Lab</CardTitle>
              <Link to="/demo">
                <Button
                  className="m-1"
                  color="info"
                  size="sm"
                  // onClick={handleClick}
                >
                  Start Here
                </Button>
              </Link>

            </CardBody>
          </Card>
          <h1>Welcome</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
