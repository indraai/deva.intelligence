"use strict";
// Intelligence Deva
// Copyright ©2000-2026 Quinn A Michaels; All rights reserved.  
// Legal Signature Required For Lawful Use.  
// Distributed under VLA:30015943562987360392 LICENSE.md
// Tuesday, January 6, 2026 - 3:37:11 PM


import Deva from '@indra.ai/deva';
import recursion from '@indra.ai/deva.recursion';
// import recursion from '/Users/quinnmichaels/Dev/deva.space/devas/deva.recursion/index.js';
// import physics from '/Users/quinnmichaels/Dev/deva.space/devas/deva.physics/index.js';
// import psychology from '/Users/quinnmichaels/Dev/deva.space/devas/deva.psychology/index.js';
// import philosophy from '/Users/quinnmichaels/Dev/deva.space/devas/deva.philosophy/index.js';

import pkg from './package.json' with {type:'json'};
const {agent,vars} = pkg.data;

// set the __dirname
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';    
const __dirname = dirname(fileURLToPath(import.meta.url));

const info = {
  id: pkg.id,
  name: pkg.name,
  describe: pkg.description,
  version: pkg.version,
  url: pkg.homepage,
  dir: __dirname,
  git: pkg.repository.url,
  bugs: pkg.bugs.url,
  author: pkg.author,
  license: pkg.license,
  VLA: pkg.VLA,
  copyright: pkg.copyright,
};

const IntelligenceDeva = new Deva({
  info,
  agent,
  vars,
  utils: {
    translate(input) {return input.trim();},
    parse(input) {return input.trim();},
    process(input) {return input.trim();},
  },
  listeners: {},
  modules: {},
  devas: {
    recursion,
    // physics,
    // psychology,
    // philosophy,
  },
  func: {},
  methods: {},
  onInit(data, resolve) {
    const {personal} = this.license(); // get the license config
    const agent_license = this.info().VLA; // get agent license
    const license_check = this.license_check(personal, agent_license); // check license
    // return this.start if license_check passes otherwise stop.
    
    this.action('return', `onInit:${data.id.uid}`);
    return license_check ? this.start(data, resolve) : this.stop(data, resolve);
  },
  onReady(data, resolve) {
    const {VLA} = this.info();
    this.prompt(`${this.vars.messages.ready} > VLA:${VLA.uid}`);
    this.action('resolve', `onReady:${data.id.uid}`);
    return resolve(data);
  },
  onError(err, data, reject) {
    this.prompt(this.vars.messages.error);
    console.log(err);
    return reject(err);
  },
});
export default IntelligenceDeva
