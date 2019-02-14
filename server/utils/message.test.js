const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',() => {
  it('should generate correct message object',() => {
    var from = 'Vamsee';
    var text = 'hey';
    var message = generateMessage(from,text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});    
  })
});
