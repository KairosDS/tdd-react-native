import React from 'react';
import SimpleCounter from '../index.android.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('should display the counter set as zero', () => {
  const wrapper = shallow(<SimpleCounter/>);

  expect(wrapper.find('#text-counter').props().children).to.equal(0);
});

it('should display the Increment button', () => {
  const wrapper = shallow(<SimpleCounter/>);

  expect(wrapper.find('#button-increment').props().title).to.equal('Increment');
});

it('should increment the counter when Increment button is pressed', () => {
  const wrapper = shallow(<SimpleCounter/>);

  wrapper.find('#button-increment').simulate('press');

  expect(wrapper.find('#text-counter').props().children).to.equal(1);
});
