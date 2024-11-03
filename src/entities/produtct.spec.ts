import { Product } from ".";

describe("Product unit tests", () => {
  it("product throw error when ID is empty", () => {
    expect(() => new Product("", "Product 1", 10)).toThrow("ID is required");
  });

  it("product throw error when name is empty", () => {
    expect(() => new Product("1", "", 10)).toThrow("Name is required");
  });

  it("product throw error when price is less than or equal to 0", () => {
    expect(() => new Product("1", "Product 1", -10)).toThrow(
      "Price must be greater than 0"
    );
  });

  it("should get product price", () => {
    const product = new Product("1", "Product 1", 10);
    expect(product.price).toBe(10);
  });

  it("should change name", () => {
    const product = new Product("1", "Product 1", 10);
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });
});
