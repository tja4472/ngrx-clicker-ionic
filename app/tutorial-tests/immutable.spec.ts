import {
    // beforeEach,
    // beforeEachProviders,
    describe,
    expect,
    // injectAsync,
    it,
} from '@angular/core/testing';

// From: http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).toBe(43);
      expect(state).toBe(42);
    });

  });

});
