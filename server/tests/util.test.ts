import { parseUrl } from "../src/routes/util/util";


describe('util - case 1', () => {
  it('should return 1', () => {
    expect(parseUrl('https://swapi.dev/api/people/?search=lu&page=1')).toBe('1');
  });
});

describe('util - case 2', () => {
  it('should return null', () => {
    expect(parseUrl(null)).toBe(null);
  });
});