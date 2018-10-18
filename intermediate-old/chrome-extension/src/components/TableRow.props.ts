import Item from '../models/Item';

export default interface TableRowProps {
    item: Item;
    isMine: boolean;
    joinShopping(item: Item): void;
    cancelJoining(item: Item): void;
    deleteItem(id: string): void;
}