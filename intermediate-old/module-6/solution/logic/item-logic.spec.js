"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
const chai_1 = require("chai");
const item_logic_1 = require("./item-logic");
describe('item validator tests', () => {
    let itemLogic;
    let persistanceMock;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        persistanceMock = new PersistanceMock();
        itemLogic = new item_logic_1.ItemsLogic(persistanceMock);
    }));
    it('should return error object "notfound" if item wasnt found in persistance', () => __awaiter(this, void 0, void 0, function* () {
        // given
        persistanceMock.getItemById.returns(Promise.resolve(null));
        const user = 'dv696w';
        // when
        const [error,] = yield itemLogic.validateItemBeforeUpdate(user, 'some-non-exitent-id');
        // then
        chai_1.expect(error).to.be.ok;
        chai_1.expect(error.errorType).to.be.eq(item_logic_1.ErrorType.ItemNotFound);
    }));
    it('should return error object "bad request" if userId == item.userId', () => __awaiter(this, void 0, void 0, function* () {
        //given
        persistanceMock.getItemById.returns(Promise.resolve({
            attuid: 'mock_user_id'
        }));
        const res = yield persistanceMock.getItemById();
        const user = 'mock_user_id';
        // when
        const [error,] = yield itemLogic.validateItemBeforeUpdate(user, 'mock_item_id');
        // then
        chai_1.expect(error).to.be.ok;
        chai_1.expect(error.errorType).to.be.eq(item_logic_1.ErrorType.BadItem);
    }));
    it('shoule return error object "bad request" if user is already in buyers', () => __awaiter(this, void 0, void 0, function* () {
        //given
        persistanceMock.getItemById.returns(Promise.resolve({
            attuid: 'mock_user_id',
            buyers: ['dv696w']
        }));
        const res = yield persistanceMock.getItemById();
        const user = 'dv696w';
        // when
        const [error,] = yield itemLogic.validateItemBeforeUpdate(user, 'mock_item_id');
        // then
        chai_1.expect(error).to.be.ok;
        chai_1.expect(error.errorType).to.be.eq(item_logic_1.ErrorType.BadItem);
    }));
    it('should return item back for sucessful request', () => __awaiter(this, void 0, void 0, function* () {
        //given
        persistanceMock.getItemById.returns(Promise.resolve({
            attuid: 'mock_user_id',
            buyers: ['dv696w']
        }));
        const res = yield persistanceMock.getItemById();
        const user = 'id_to_be_added';
        // when
        const [, item] = yield itemLogic.validateItemBeforeUpdate(user, 'mock_item_id');
        // then
        chai_1.expect(item).to.be.ok;
        chai_1.expect(item.buyers).includes('id_to_be_added');
    }));
});
class PersistanceMock {
    constructor() {
        this.getItems = sinon.stub();
        this.getItemById = sinon.stub();
        this.insertItem = sinon.stub();
        this.updateItem = sinon.stub();
        this.deleteItem = sinon.stub();
    }
}
//# sourceMappingURL=item-logic.spec.js.map