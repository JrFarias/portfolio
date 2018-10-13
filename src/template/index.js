import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/Header'

const TemplateStyled = styled.div`
  display: flex;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`

const Template = ({ children }) => (
  <TemplateStyled>
    <Header />
    {children}
  </TemplateStyled>
)

Template.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Template
