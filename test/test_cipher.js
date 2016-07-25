'use strict';

const ceasarCipher = require('../ceasarCipher');
const assert = require('chai').assert;

describe('Decode tests', function() {
  it('should return correct decode', function() {
    let shift = 3;
    let text = "oruhp lsvxp groru vlw";
    assert.equal(ceasarCipher.decode(text, shift), "lorem ipsum dolor sit");
  });

  it('should handle uppercase correctly', function() {
    let shift = 3;
    let text = "Oruhp Lsvxp Groru Vlw";
    assert.equal(ceasarCipher.decode(text, shift), "Lorem Ipsum Dolor Sit");
  });

  it('leave numbers unchanged', function() {
    let shift = 3;
    let text = "oruhp 5 lsvxp 1 groru vlw 2";
    assert.equal(ceasarCipher.decode(text, shift), "lorem 5 ipsum 1 dolor sit 2");
  });

  it('can handle .?,; and other special chars', function() {
    let shift = 3;
    let text = "Oruhp. Lsvxp! Groru;vlw:2";
    assert.equal(ceasarCipher.decode(text, shift), "Lorem. Ipsum! Dolor;sit:2");
  });

  it('can do ROT0', function() {
    let shift = 0;
    let text = "To be or not to be, That is the question";
    assert.equal(ceasarCipher.decode(text, shift), text);
  });

  it('ROT13', function() {
    let shift = 13;
    let text = "Gb or be abg gb or, Gung vf gur dhrfgvba";
    assert.equal(ceasarCipher.decode(text, shift), "To be or not to be, That is the question");
  });

  it('ROT25', function() {
    let shift = 25;
    let text = "Sn ad nq mns sn ad, Sgzs hr sgd ptdrshnm";
    assert.equal(ceasarCipher.decode(text, shift), "To be or not to be, That is the question");
  });

  it('ROT26 leaves text unchanged', function() {
    let shift = 26;
    let text = "To be or not to be, That is the question";
    assert.equal(ceasarCipher.decode(text, shift), text);
  });

  it('only numbers as strings leave numbers unchanged', function() {
    let shift = 4;
    let text = "123456789";
    assert.equal(ceasarCipher.decode(text, shift), text);
  });

  it('return input if its a number', function() {
    let shift = 4;
    let text = 12345678;
    assert.equal(ceasarCipher.decode(text, shift), text);
  });

  it('works with negative shift', function() {
    let shift = -3;
    let text = 'This is a secret message';
    assert.equal(ceasarCipher.decode(text, shift), 'Wklv lv d vhfuhw phvvdjh');
  });

  it('shift -3 result === shift -3 + 26', function() {
    let shift = -3;
    let text = 'This is a secret message';
    assert.equal(ceasarCipher.decode(text, shift),
                  ceasarCipher.decode(text, shift + 26));
  });

  it('shift -25', function() {
    let shift = -25;
    let text = 'This is a secret message';
    assert.equal(ceasarCipher.decode(text, shift),'Sghr hr z rdbqds ldrrzfd')
  });

});
