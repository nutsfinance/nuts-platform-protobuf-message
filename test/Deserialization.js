const messages = require(__dirname + "/../");
const assert = require('assert');
const BigNumber = require('bignumber.js');

describe('TestDeserialization', () => {
  it('should return same address', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let addressField = new proto.solidity.address();
    addressField.saveAsBytes(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32"));
    message.setInputtokenaddress(addressField);
    assert.equal("0xec652e6cec1558227b406e68539e3d725ccddc32", message.getInputtokenaddress().toAddress());
  }),
  it('should return same integer number', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = new proto.solidity.uint256();
    intField.saveAsBytes(1234);
    message.setInputamount(intField);
    assert.equal(1234, message.getInputamount().toNumber());
  }),
  it('should return same integer bigint', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = new proto.solidity.uint256();
    intField.saveAsBytes(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32"));
    message.setInputamount(intField);
    assert.ok(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32").isEqualTo(message.getInputamount().toBigInt()));
  })
});
