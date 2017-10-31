import React from 'react'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const IndexPage = () => (
  <div>
    <h1>Welcom to Gatsby React Flex Layout</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
        <Grid fluid>
            <Row>
              <Col xs={12} sm={3} md={3} className="left">
                Hello, world!
              </Col>
              <Col xs={12} sm={6} md={6} className="content">
                Hi, world!
              </Col>
              <Col xs={12} sm={3} md={3} className="right">
                Hi, world!
              </Col>
            </Row>
          </Grid>




  </div>
)

export default IndexPage
