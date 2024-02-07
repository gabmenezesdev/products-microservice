import request from "supertest";
import { app } from "../../../../server";
import { CreateProductUseCase } from "../createProductUseCase";
import { IProduct } from "../../../../interfaces/IProduct";
import { creationBody } from "../../../../testUtils/productMockData";

jest.mock("../createProductUseCase");

describe("Create Product Controller", () => {
  jest
    .spyOn(CreateProductUseCase.prototype, "execute")
    .mockImplementation(async (createBody: IProduct) => {});

  it("Should be able to create a product", async () => {
    //given
    let fullCreation = creationBody;
    //when
    const response = await request(app)
      .post("/api/v1/products")
      .send(fullCreation);

    //then
    expect(response.statusCode).toBe(201);
  });

  it("Should throw a title error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      title: "",
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
  });
});
