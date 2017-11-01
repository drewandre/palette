import AppTest from '../src/components/AppTest';
import React from 'react'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for AppTest', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AppTest />)
  })

  it('should pass', () => {
    expect(wrapper.find('h1').text()).toEqual("Hello World")
  })
})
