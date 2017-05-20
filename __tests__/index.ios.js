import React from 'react';
import SimpleCounter from '../index.ios.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('should display the counter set as zero', () => {
  const wrapper = shallow(<SimpleCounter/>);

  expect(wrapper.find('#text-counter').props().children).to.equal('0');
});
