import Address from "./address";

describe("Address unit tests", () => {
  it("should throw error when street is empty", () => {
    expect(() => new Address("", "Springfield", "IL", "62701")).toThrow(
      "Street is required"
    );
  });

  it("should throw error when city is empty", () => {
    expect(() => new Address("123 Main St", "", "IL", "62701")).toThrow(
      "City is required"
    );
  });

  it("should throw error when state is empty", () => {
    expect(
      () => new Address("123 Main St", "Springfield", "", "62701")
    ).toThrow("State is required");
  });

  it("should throw error when zip is empty", () => {
    expect(() => new Address("123 Main St", "Springfield", "IL", "")).toThrow(
      "Zip is required"
    );
  });

  it("should return street", () => {
    const address = new Address("123 Main St", "Springfield", "IL", "62701");

    expect(address.street).toBe("123 Main St");
  });

  it("should return city", () => {
    const address = new Address("123 Main St", "Springfield", "IL", "62701");

    expect(address.city).toBe("Springfield");
  });

  it("should return state", () => {
    const address = new Address("123 Main St", "Springfield", "IL", "62701");

    expect(address.state).toBe("IL");
  });

  it("should return zip", () => {
    const address = new Address("123 Main St", "Springfield", "IL", "62701");

    expect(address.zip).toBe("62701");
  });
});
