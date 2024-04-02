const assert = require('assert');
const Translator = require('../index');

describe('Translator', function() {
  it('should translate to empty string when no text is provided', async function() {
    const translator = new Translator();
    const result = await translator.toEn(undefined);
    assert.strictEqual(result, '', 'Expected translation of undefined to be an empty string');
  });
});
