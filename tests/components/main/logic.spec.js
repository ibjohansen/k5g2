import 'babel-polyfill'
import {calculator} from '../../../src/components/main/logic';
import assert from 'assert';

describe('Calculations', () => {

  describe('addition', () => {
    it('should add two numbers', () => {
      const result = calculator(1, 2, 'add');
      assert.equal(result, 3);
    });
  });

  describe('subtraction', () => {
    it('should subtract two numbers', () => {
      const result = calculator(1, 2, 'subtract');
      assert.equal(result, -1);
    });
  });

  describe('multiplication', () => {
    it('should multiply two numbers', () => {
      const result = calculator(1, 2, 'multiply');
      assert.equal(result, 2);
    });
  });

  describe('division', () => {
    it('should divide two numbers', () => {
      const result = calculator(10, 5, 'divide');
      assert.equal(result, 2);
    });
    it('divide by zero', () => {
      const result = calculator(4, 0, 'divide');
      assert.equal(result, 'Infinity');
    });
  });

  describe('wrong arguments', () => {
    it('should return null', () => {
      const result = calculator(10, 5, 'somethingelse');
      assert.equal(result, null);
    });
  });
});
