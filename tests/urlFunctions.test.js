//import your function:
const { testUrl } = require('../../url_functions');
//describe divide our tests in sections
describe('url module -> testUrl', () => {
test('passing nothing to function testUrl- EXPECT ERROR MESSAGE',                      async () => {
await expect(testUrl(null)).rejects.toThrow('Fetch failed');
});
}
