import { Address, Customer } from ".";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Customer("", "John Doe")).toThrow("ID is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => new Customer("1", "")).toThrow("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("1", "John Doe");

    customer.changeName("Jane Watson");

    expect(customer.name).toBe("Jane Watson");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "John Doe");

    customer.address = new Address("123 Main St", "Springfield", "IL", "62701");

    customer.activate();

    expect(customer.isActive).toBe(true);
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "John Doe");

    customer.deactivate();

    expect(customer.isActive).toBe(false);
  });

  it("should throw error when address is undefined", () => {
    const customer = new Customer("1", "John Doe");

    expect(() => customer.activate()).toThrow("Address is required");
  });
});
