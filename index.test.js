"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:13684469756482984100 LICENSE.md

const {expect} = require('chai')
const IntelligenceDeva = require('./index.js');

describe(IntelligenceDeva.me.name, () => {
  beforeEach(() => {
    return IntelligenceDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(IntelligenceDeva).to.be.an('object');
    expect(IntelligenceDeva).to.have.property('agent');
    expect(IntelligenceDeva).to.have.property('vars');
    expect(IntelligenceDeva).to.have.property('listeners');
    expect(IntelligenceDeva).to.have.property('methods');
    expect(IntelligenceDeva).to.have.property('modules');
  });
})
