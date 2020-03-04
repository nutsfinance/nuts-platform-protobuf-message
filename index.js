const soltype = require(__dirname + "/utils/utils.js");
const BorrowingData = soltype.importTypes(require(__dirname + '/messages/BorrowingData_pb.js'));
const InstrumentData = soltype.importTypes(require(__dirname + '/messages/InstrumentData_pb.js'));
const IssuanceData = soltype.importTypes(require(__dirname + '/messages/IssuanceData_pb.js'));
const LendingData = soltype.importTypes(require(__dirname + '/messages/LendingData_pb.js'));
const SupplementalLineItem = soltype.importTypes(require(__dirname + '/messages/SupplementalLineItem_pb.js'));
const SwapData = soltype.importTypes(require(__dirname + '/messages/SwapData_pb.js'));
const TokenTransfer = soltype.importTypes(require(__dirname + '/messages/TokenTransfer_pb.js'));

module.exports = {
  BorrowingData: BorrowingData,
  InstrumentData: InstrumentData,
  IssuanceData: IssuanceData,
  LendingData: LendingData,
  SupplementalLineItem: SupplementalLineItem,
  SwapData: SwapData,
  TokenTransfer: TokenTransfer
};
