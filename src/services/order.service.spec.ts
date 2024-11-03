import { Order, OrderItem, OrderService } from "..";

describe("OrderService unit tests", () => {
  it("should get total of all orders", () => {
    const item1 = new OrderItem("i1", "Item 1", 100, "Product 1", 1);
    const item2 = new OrderItem("i2", "Item 2", 200, "Product 2", 2);

    const order1 = new Order("o1", "Customer 1", [item1]);
    const order2 = new Order("o2", "Customer 2", [item2]);

    const total = OrderService.calculateTotal([order1, order2]);

    expect(total).toBe(500);
  });
});
