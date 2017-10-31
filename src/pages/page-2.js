import React from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './page-2.css'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
      <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={6} className="left-side">
              Hello, world!
            </Col>
            <Col xs={12} sm={6} md={6} className="right-side">
              Hi, world!
            </Col>
          </Row>
        </Grid>
  </div>
)

export default SecondPage
