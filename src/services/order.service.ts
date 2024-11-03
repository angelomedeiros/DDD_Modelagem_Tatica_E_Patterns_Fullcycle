import { Order } from "..";

export default class OrderService {
  static calculateTotal(order: Order[]): number {
    return order.reduce((total, orderItem) => {
      return total + orderItem.total;
    }, 0);
  }
}
