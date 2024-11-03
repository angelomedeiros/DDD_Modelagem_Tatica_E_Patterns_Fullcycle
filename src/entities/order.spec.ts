import { Order, OrderItem } from ".";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Order("", "1", [])).toThrow("ID is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => new Order("1", "", [])).toThrow("customerId is required");
  });

  it("should throw error when items is empty", () => {
    expect(() => new Order("1", "1", [])).toThrow("Items are required");
  });

  it("should calculate total", () => {
    let orderItems = [
      new OrderItem("1", "item1", 10),
      new OrderItem("2", "item2", 20),
    ];

    const order = new Order("1", "1", orderItems);

    expect(order.total).toBe(30);
  });
});
