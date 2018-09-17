import { ItemsController } from "./controllers/items.controller";
import { Item } from "./models/item.model";
import { ItemType } from "./enums/item-type.enum";

let printItemsList = async () => {
    let itemsList = await itemsController.list();
    console.log(itemsList);
}

let itemsController = new ItemsController();
let item = new Item("Table", "Designers table", 1350, "TLV", true, 1, "almog", ItemType.Garden);
console.log("inserted item", item);
itemsController.create(item)
    .then(() => {
        console.log("Item created successfully");
    });
console.log("items after insert:");
printItemsList();