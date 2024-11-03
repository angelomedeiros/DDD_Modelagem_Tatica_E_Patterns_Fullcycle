import { Customer, Order, OrderItem } from "..";
import { randomUUID } from "crypto";

export default class OrderService {
  static calculateTotal(order: Order[]): number {
    return order.reduce((total, orderItem) => {
      return total + orderItem.total;
    }, 0);
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const orderId = randomUUID();

    const order = new Order(orderId, customer.id, items);
    customer.addRewardPoints(order.total / 2);

    return order;
  }
}
