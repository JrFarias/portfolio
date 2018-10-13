import React from 'react'
import { mount } from 'enzyme'

import App from '.'

describe('App', () => {
  test('matches the snapshot', () => {
    const element = mount(<App />)

    expect(element).toMatchSnapshot()
  })
})
