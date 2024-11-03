import { Product, ProductService } from "..";

describe("OrderService unit tests", () => {
  it("should return a list of orders", () => {
    const product1 = new Product("1", "Product 1", 100);
    const product2 = new Product("2", "Product 2", 200);
    const products = [product1, product2];

    ProductService.increasePrice(products, 10);

    expect(products[0].price).toBe(110);
    expect(products[1].price).toBe(220);
  });
});
