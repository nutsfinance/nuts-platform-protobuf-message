const messages = require(__dirname + "/../");
const BigNumber = require('bignumber.js');
const expect  = require('chai').expect;

describe('TestSerialization', () => {
  it('should return same address', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let addressField = proto.solidity.address.fromAddress('0xec652e6cec1558227b406e68539e3d725ccddc32');
    message.setInputtokenaddress(addressField);
    let buffer = message.serializeBinary();
    let copy = proto.SpotSwapMakerParameters.deserializeBinary(buffer);
    expect(copy.getInputtokenaddress().toAddress()).to.equal('0xec652e6cec1558227b406e68539e3d725ccddc32');
  }),
  it('should return same integer number', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromNumber(1234);
    message.setInputamount(intField);
    let buffer = message.serializeBinary();
    let copy = proto.SpotSwapMakerParameters.deserializeBinary(buffer);
    expect(copy.getInputamount().toNumber()).to.equal(1234);
  }),
  it('should return same integer bigint', () => {
    let proto = messages.SwapData;
    let message = new proto.SpotSwapMakerParameters();
    let intField = proto.solidity.uint256.fromBigNumber(new BigNumber('0xec652e6cec1558227b406e68539e3d725ccddc32'));
    message.setInputamount(intField);
    let buffer = message.serializeBinary();
    let copy = proto.SpotSwapMakerParameters.deserializeBinary(buffer);
    expect(copy.getInputamount().toBigNumber()).to.deep.equal(new BigNumber("0xec652e6cec1558227b406e68539e3d725ccddc32"));
  }),
  it('should serialize and deserialize lending maker parameters', () => {
    let proto = messages.LendingData;
    let lendingMakerParameters = new proto.LendingMakerParameters();
    lendingMakerParameters.setCollateraltokenaddress(proto.address.fromAddress('0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF'));
    lendingMakerParameters.setLendingtokenaddress(proto.address.fromAddress('0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF'));
    lendingMakerParameters.setLendingamount(proto.uint256.fromNumber("1500000000000000000"));
    lendingMakerParameters.setCollateralratio(proto.uint256.fromNumber(20000));
    lendingMakerParameters.setTenordays(proto.uint256.fromNumber(45));
    lendingMakerParameters.setInterestrate(proto.uint256.fromNumber(300));
    let buffer = lendingMakerParameters.serializeBinary();
    let copy = proto.LendingMakerParameters.deserializeBinary(buffer);
    expect(copy.getCollateraltokenaddress().toAddress()).to.equal('0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF');
    expect(copy.getLendingtokenaddress().toAddress()).to.equal('0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF');
    expect(copy.getLendingamount().toBigNumber()).to.deep.equal(new BigNumber("1500000000000000000"));
    expect(copy.getCollateralratio().toNumber()).to.equal(20000);
    expect(copy.getTenordays().toNumber()).to.equal(45);
    expect(copy.getInterestrate().toNumber()).to.equal(300);
  })
});
