'use strict';

export const SupplementalLineItemType = {
    UNKNOWN_TYPE: 'UnknownType',
    PAYABLE: 'Payable',
};

export const SupplementalLineItemState = {
    UNKNOWN_STATE: 'UnknownState',
    UNPAID: 'Unpaid',
    PAID: 'Paid',
    REINITIATED: 'Reinitiated',
};

export class SupplementalLineItem {
    /**
     * @constructor
     * @param {Number|BigNumber} id 
     * @param {SupplementalLineItemType} type 
     * @param {SupplementalLineItemState} state 
     * @param {String} obligatorAddress 
     * @param {String} claimorAddress 
     * @param {String} tokenAddress 
     * @param {Number|BigNumber} amount 
     * @param {Number|BigNumber} dueTimestamp 
     * @param {Number|BigNumber} reinitiatedTo 
     */
    constructor(id, type, state, obligatorAddress, claimorAddress, tokenAddress, amount, dueTimestamp, reinitiatedTo) {
        this.id = id;
        this.type = type;
        this.state = state;
        this.obligatorAddress = obligatorAddress;
        this.claimorAddress = claimorAddress;
        this.tokenAddress = tokenAddress;
        this.amount = amount;
        this.dueTimestamp = dueTimestamp;
        this.reinitiatedTo = reinitiatedTo;
    }
}