import React from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

import { HeaderStyled, ListIcon } from './Header.styled'
import data from '../../data'

const Header = () => (
  <HeaderStyled>
    <Grid>
      <Row reverse>
        <Col xs={8} sm={7} md={6} lg={4}>
          <img alt={data.name} src="https://avatars1.githubusercontent.com/u/15342475?s=460&v=4" />
        </Col>
      </Row>
      <Row reverse>
        <Col xs={12} sm={12} md={10} lg={10}>
          <h2>{data.description}</h2>
        </Col>
      </Row>
      <Row reverse>
        <Col xs={12} sm={12} md={10} lg={6}>
          <ListIcon>
            {
              data.contacts.map(c => (
                <li key={c.alt}>
                  <a alt={c.alt} href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.icon}
                  </a>
                </li>
              ))
            }
          </ListIcon>
        </Col>
      </Row>
    </Grid>
  </HeaderStyled>
)

export default Header
