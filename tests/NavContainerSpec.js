import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import NavContainer from '../src/js/views/NavContainer';
import FetchArticlesFormContainer from '../src/js/views/FetchArticlesFormContainer';

chai.use(chaiEnzyme());
const expect = chai.expect;

const wrapper = mount(<NavContainer />);

describe('NavContainer', () => {
  it('should be defined', () => {
    expect(NavContainer).to.not.equal(undefined);
  });
});

describe('NavContainer', () => {
  const children = wrapper.children();
  it('should have an id of nav-container', () => {
    expect(wrapper).to.have.id('nav-container');
  });

  it('should have a class of row', () => {
    expect(wrapper).to.have.className('row');
  });

  it('should have two direct children', () => {
    expect(children).to.have.length(2);
  });

  it('should have a first child with an id of nav-controls', () => {
    expect(children.at(0)).to.have.id('nav-controls');
  });

  it('should have a first child with class col-md-6', () => {
    expect(children.at(0)).to.have.className('col-md-6');
  });

  it('should have a second child that\'s an instance of FetchArticlesFormContainer', () => {
    expect(children.at(1).is(FetchArticlesFormContainer)).to.equal(true);
  });

  it('should have a second child with an id of fetch-articles-form-container', () => {
    expect(children.at(1)).to.have.id('fetch-articles-form-container');
  });

  it('should have a first child with class col-md-6', () => {
    expect(children.at(1)).to.have.className('col-md-6');
  });
});
