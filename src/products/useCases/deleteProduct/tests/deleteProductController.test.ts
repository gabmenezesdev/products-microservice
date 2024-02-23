import request from "supertest";
import { app } from "../../../../server";
import { DeleteProductUseCase } from "../deleteProductUseCase";
import { testToken } from "../../../../testUtils/productMockData";

jest.mock("../deleteProductUseCase");

describe("Delete Product Controller", () => {
  jest
    .spyOn(DeleteProductUseCase.prototype, "execute")
    .mockImplementation(async () => {});

  it("Should be able to delete a product", async () => {
    const response = await request(app)
      .delete("/api/v1/products/1")
      .set("Authorization", testToken)
      .send();

    expect(response.statusCode).toBe(204);
    expect(DeleteProductUseCase.prototype.execute).toHaveBeenCalledWith(
      "1",
      "1"
    );
  });
});
