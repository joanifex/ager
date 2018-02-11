import reducer from './populations';

describe('populations reducer', () => {
  describe('initial state', () => {
    it('should have property byId', () => {
      expect(reducer(undefined, {})).toHaveProperty('byId');
    });
    it('should have property allIds', () => {
      expect(reducer(undefined, {})).toHaveProperty('allIds');
    });
  });
});
