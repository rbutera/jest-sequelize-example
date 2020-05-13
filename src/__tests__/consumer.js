const mockDatabase = {
  query: jest.fn(),
};

// NOTE: jest.doMock is used here because jest.mock is automatically hoisted to top of file.
jest.doMock("../database", () => {
  return mockDatabase;
});

// NOTE: we are importing dependencies after jest.doMock call (IMPORTANT)
const database = require("../database");
const consumer = require("../consumer");

describe("database consumer", () => {
  describe("example method", () => {
    it("exists", () => {
      expect(consumer.example).toBeDefined();
    });

    it("calls database.query", async () => {
      const input = "foobar";
      mockDatabase.query.mockResolvedValue("it works!");
      const result = await consumer.example(input);
      expect(database.query).toHaveBeenCalledWith(input);
      expect(result).toEqual("it works!");
    });
  });
});
