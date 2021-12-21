const { expect } = require('chai');
const { addToCounter } = require('../../lib/change-counter');
const path = require('path');
const { JSDOM } = require('jsdom');
const html = path.resolve(__dirname, '../../lib/index.html');




describe('Change Counter', () => {
  beforeEach(async () => {
    const dom = await JSDOM.fromFile(html);

    global.window = dom.defaultView;
    global.document = dom.window.document;
  });

  it('shows the proper default values', () => {
    const element = document.querySelector('#counter_element')
    expect(element.innerHTML).to.equal('0');
  })

  it('changes counter properly', () => {
    const element = document.querySelector('#counter_element')
    addToCounter();

    expect(element.innerHTML).to.equal('1');
  })
})