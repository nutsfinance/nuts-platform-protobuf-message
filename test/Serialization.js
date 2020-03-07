const messages = require(__dirname + "/../");
const assert = require('assert');
const BigNumber = require('bignumber.js');

describe('TestSerialization', () => {
  it('should return same address', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let addressField = proto.solidity.address.fromAddress('0xec652e6cec1558227b406e68539e3d725ccddc32');
    message.setInputtokenaddress(addressField);
    let buffer = message.serializeBinary();
    let copy = proto.SpotSwapMakerParameters.deserializeBinary(buffer);
    assert.equal("0xec652e6cec1558227b406e68539e3d725ccddc32", copy.getInputtokenaddress().toAddress());
  }),
  it('should return same integer number', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromNumber(1234);
    message.setInputamount(intField);
    let buffer = message.serializeBinary();
    let copy = proto.SpotSwapMakerParameters.deserializeBinary(buffer);
    assert.equal(1234, copy.getInputamount().toNumber());
  }),
  it('should return same integer bigint', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromBigNumber(new BigNumber('0xec652e6cec1558227b406e68539e3d725ccddc32'));
    message.setInputamount(intField);
    let buffer = message.serializeBinary();
    let copy = proto.SpotSwapMakerParameters.deserializeBinary(buffer);
    assert.ok(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32").isEqualTo(copy.getInputamount().toBigNumber()));
  })
});
