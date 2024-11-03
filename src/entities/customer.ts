import { Address } from ".";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    if (!this._address) {
      throw new Error("Address is required");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  get name() {
    return this._name;
  }

  set address(address: Address) {
    this._address = address;
  }

  get isActive() {
    return this._active;
  }
}
