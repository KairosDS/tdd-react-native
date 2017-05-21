import React from 'react';
import SimpleCounter from '../index.ios.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

it('should display the counter set as zero', () => {
  const wrapper = shallow(<SimpleCounter/>);

  expect(wrapper.find('#text-counter').props().children).to.equal(0);
});

it('should display the Increment button', () => {
  const wrapper = shallow(<SimpleCounter/>);

  expect(wrapper.find('#button-increment').props().title).to.equal('Increment');
  expect(wrapper.find('#button-increment').props().color).to.equal('green');
});

it('should increment the counter when Increment button is pressed', () => {
  const wrapper = shallow(<SimpleCounter/>);

  wrapper.find('#button-increment').simulate('press');

  expect(wrapper.find('#text-counter').props().children).to.equal(1);
});

it('should display the Reset button', () => {
  const wrapper = shallow(<SimpleCounter/>);

  expect(wrapper.find('#button-reset').props().title).to.equal('Reset');
  expect(wrapper.find('#button-reset').props().color).to.equal('red');
});

it('should reset the counter when Reset button is pressed', () => {
  const wrapper = shallow(<SimpleCounter/>);

  wrapper.find('#button-increment').simulate('press');
  wrapper.find('#button-reset').simulate('press');

  expect(wrapper.find('#text-counter').props().children).to.equal(0);
});
