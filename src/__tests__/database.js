// dependencies
const Sequelize = require("sequelize");
jest.mock("sequelize");

describe("database wrapper", () => {
  beforeEach(() => {
    Sequelize.mockClear();
  });

  it("exports an instance of sequelize", () => {
    expect(Sequelize).not.toHaveBeenCalled();
    require("../database");
    expect(Sequelize).toHaveBeenCalledWith(
      "localhost",
      "username",
      "password",
      {
        dialect: "mysql",
      }
    );
  });
});
