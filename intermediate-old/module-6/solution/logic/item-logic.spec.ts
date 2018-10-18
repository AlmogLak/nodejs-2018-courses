import * as sinon from 'sinon';
import { expect } from 'chai';
import Item from '../../../models/Item';
import { ItemsLogic, ErrorType } from "./item-logic";
import { PersistanceInterface } from "../../../module-3/solution/persistance/persistance.interface";

describe('item validator tests', () => {
    let itemLogic: ItemsLogic
    let persistanceMock: PersistanceMock;
    beforeEach(async () => {
        persistanceMock = new PersistanceMock();
        itemLogic = new ItemsLogic(persistanceMock);
    });
    it('should return error object "notfound" if item wasnt found in persistance', async () => {
        // given
        persistanceMock.getItemById.returns(Promise.resolve(null));
        const user = 'dv696w';

        // when
        const [error,] = await itemLogic.validateItemBeforeUpdate(user, 'some-non-exitent-id');

        // then
        expect(error).to.be.ok;
        expect(error.errorType).to.be.eq(ErrorType.ItemNotFound);
    });

    it('should return error object "bad request" if userId == item.userId', async () => {
        //given
        persistanceMock.getItemById.returns(Promise.resolve({
            attuid: 'mock_user_id'
        } as Item));

        const res = await persistanceMock.getItemById();
        const user = 'mock_user_id';

        // when
        const [error,] = await itemLogic.validateItemBeforeUpdate(user, 'mock_item_id');
        // then
        expect(error).to.be.ok;
        expect(error.errorType).to.be.eq(ErrorType.BadItem);

    });

    it('shoule return error object "bad request" if user is already in buyers', async () => {
        //given
        persistanceMock.getItemById.returns(Promise.resolve({
            attuid: 'mock_user_id',
            buyers: ['dv696w']
        } as Item));

        const res = await persistanceMock.getItemById();
        const user = 'dv696w';

        // when
        const [error,] = await itemLogic.validateItemBeforeUpdate(user, 'mock_item_id');
        // then
        expect(error).to.be.ok;
        expect(error.errorType).to.be.eq(ErrorType.BadItem);
    });

    it('should return item back for sucessful request', async () => {
        //given
        persistanceMock.getItemById.returns(Promise.resolve({
            attuid: 'mock_user_id',
            buyers: ['dv696w']
        } as Item));

        const res = await persistanceMock.getItemById();
        const user = 'id_to_be_added';

        // when
        const [,item] = await itemLogic.validateItemBeforeUpdate(user, 'mock_item_id');
        // then
        expect(item).to.be.ok;
        expect(item.buyers).includes('id_to_be_added')
    });
});

class PersistanceMock implements PersistanceInterface {
    getItems = sinon.stub();
    getItemById = sinon.stub();
    insertItem = sinon.stub();
    updateItem = sinon.stub();
    deleteItem = sinon.stub();
}