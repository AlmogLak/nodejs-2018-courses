import { ItemsController } from "./controllers/items.controller";
import { Item } from "./models/item.model";
import { ItemType } from "./enums/item-type.enum";


let itemsController = new ItemsController();
let item = new Item("Table", "Designers table", 1350, "TLV", true, 1, "almog", ItemType.Garden);
console.log("inserted item", item);
console.log("items", itemsController.list());
itemsController.create(item);
console.log("items after insert", itemsController.list());