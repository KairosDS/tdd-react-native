import React from 'react';
import SimpleCounter from '../index.android.js';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<SimpleCounter>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SimpleCounter/>);
  });

  describe('initial state', () => {
    it('should display the counter set as zero', () => {
      expect(wrapper.find('#text-counter').props().children).to.equal(0);
    });

    it('should display the Increment button', () => {
      expect(wrapper.find('#button-increment').props().title).to.equal('Increment');
      expect(wrapper.find('#button-increment').props().color).to.equal('green');
    });

    it('should display the Reset button', () => {
      expect(wrapper.find('#button-reset').props().title).to.equal('Reset');
      expect(wrapper.find('#button-reset').props().color).to.equal('red');
    });
  });

  describe('user interactions', () => {
    it('should increment the counter when Increment button is pressed', () => {
      wrapper.find('#button-increment').simulate('press');

      expect(wrapper.find('#text-counter').props().children).to.equal(1);
    });

    it('should reset the counter when Reset button is pressed', () => {
      wrapper.find('#button-increment').simulate('press');
      wrapper.find('#button-reset').simulate('press');

      expect(wrapper.find('#text-counter').props().children).to.equal(0);
    });
  });
});
