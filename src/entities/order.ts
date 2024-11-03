import { OrderItem } from "./";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total;

    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
    if (this._customerId.length === 0) {
      throw new Error("customerId is required");
    }
    if (this._items.length === 0) {
      throw new Error("Items are required");
    }
  }

  get total() {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal, 0);
  }
}
