import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import WelcomeMessageContainer from '../src/js/views/WelcomeMessageContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('WelcomeMessageContainer', () => {
  it('should be defined', () => {
    expect(WelcomeMessageContainer).to.not.equal(undefined);
  });
});

const wrapper = mount(<WelcomeMessageContainer />);
const children = wrapper.children();
describe('WelcomeMessageContainer', () => {
  it('should have a class of row when rendered', () => {
    expect(wrapper).to.have.className('row');
  });

  it('should NOT have a class of hidden when it is first rendered', () => {
    expect(wrapper).to.not.have.className('hidden');
  });

  it('should have exactly three (3) direct children', () => {
    expect(children).to.have.length(3);
  });

  const firstChild = children.at(0);
  it('should have a first child that is an img', () => {
    expect(firstChild.is('img')).to.equal(true);
  });

  it('should have a first child that is an img with "src=/img/welcome-img.png"', () => {
    expect(firstChild).to.have.attr('src', '/img/welcome-img.png');
  });

  it('should have a first child that has a class of img-responsive', () => {
    expect(firstChild).to.have.className('img-responsive');
  });

  it('should have a first child that has a class of center-block', () => {
    expect(firstChild).to.have.className('center-block');
  });

  const secondChild = children.at(1);
  it('should have a second child that is an h1', () => {
    expect(secondChild.is('h1')).to.equal(true);
  });

  it('should have a second child that has a class of col-xs-12', () => {
    expect(secondChild.is('.display-4')).to.equal(true);
  });

  it('should have a second child that has a class of text-center', () => {
    expect(secondChild.is('.text-center')).to.equal(true);
  });

  it('should have a second child that is a class of bg-light-blue', () => {
    expect(secondChild.is('.bg-light-blue')).to.equal(true);
  });

  // For the reasons why I used render(), see:
  // http://airbnb.io/enzyme/docs/api/ReactWrapper/text.html#-text-string
  it('should have a second child that has the text \'Welcome to your dashboard\'', () => {
    expect(secondChild.render().text()).to.equal('Welcome to your dashboard');
  });

  const thirdChild = children.at(2);
  it('should have a third child that is a p element', () => {
    expect(thirdChild.is('p')).to.equal(true);
  });

  it('should have a third child that has a class of lead', () => {
    expect(thirdChild.is('.lead')).to.equal(true);
  });

  it('should have a third child that has a class of text-center', () => {
    expect(thirdChild.is('.text-center')).to.equal(true);
  });

  // For details of why I decided to use render(), see:
  // http://airbnb.io/enzyme/docs/api/ReactWrapper/text.html#-text-string
  const welcomeText = 'To read news articles from your desired source, please use ' +
    'the form in the navigation bar.';
  it(`should have a third child that has text of '${welcomeText}'`, () => {
    expect(thirdChild.render().text()).to.equal(welcomeText);
  });
});

describe('When its state is set to something new, WelcomeMessageContainer', () => {
  // The aim of this test is to simulate how WelcomeMessageContainer will react when 
  // its Store changes, in turn due to an appropriate Action.
  const newState = {
    htmlClasses: ['row', 'hidden']
  };
  const newWrapper = mount(<WelcomeMessageContainer />);
  newWrapper.setState(newState);
  it(`should have class hidden when WelcomeMessageContainer.state.htmlClasses is set to ${newState.htmlClasses}`, () => {
    expect(newWrapper).to.have.className('hidden');
  });
});
