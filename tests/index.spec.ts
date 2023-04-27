import { encodeEmojis } from '../src/index';

describe('encodeEmojis', () => {
  it('should encode emojis to html entities', () => {
    expect(encodeEmojis('❤️')).toBe('&#x2764;️');
  });

  it('should not encode any other HTML characters', () => {
    expect(encodeEmojis('<strong>Hello!</strong> 👋')).toBe('&#x2764;️');
  });

  it('should encode emojis with variations', () => {
    expect(encodeEmojis('✊🏾')).toBe('&#x270a;&#x1f3fe;');
  });
});
