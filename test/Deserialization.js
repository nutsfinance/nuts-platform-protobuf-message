const messages = require(__dirname + "/../");
const BigNumber = require('bignumber.js');
const expect  = require('chai').expect;

describe('TestDeserialization', () => {
  it('should return same address', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let addressField = proto.solidity.address.fromAddress('0xec652e6cec1558227b406e68539e3d725ccddc32');
    message.setInputtokenaddress(addressField);
    expect(message.getInputtokenaddress().toAddress()).to.equal('0xec652e6cec1558227b406e68539e3d725ccddc32');
  }),
  it('should return same integer number', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromNumber(1234);
    message.setInputamount(intField);
    expect(1234, message.getInputamount().toNumber()).to.equal(1234);
  }),
  it('should return same integer number as string input', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromNumber("1500000000000000000");
    message.setInputamount(intField);
    expect(message.getInputamount().toNumber()).equal(1500000000000000000);
  }),
  it('should return same integer bigint', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromBigNumber(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32"));
    message.setInputamount(intField);
    expect(message.getInputamount().toBigNumber()).to.deep.equal(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32"));
  })
});