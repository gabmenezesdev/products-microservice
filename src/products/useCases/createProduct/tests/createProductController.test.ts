import request from "supertest";
import { app } from "../../../../server";
import { CreateProductUseCase } from "../createProductUseCase";
import { IProduct } from "../../../../interfaces/IProduct";
import { creationBody, testToken } from "../../../../testUtils/productMockData";

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
      .set("Authorization", testToken)
      .send(fullCreation);

    console.log("response");
    console.log(response);

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
      .set("Authorization", testToken)
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
  });

  it("Should throw a price error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      price: 0,
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .set("Authorization", testToken)
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe(
      "O preço deve ser maior que 0"
    );
  });

  it("Should throw a category error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      category: "",
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .set("Authorization", testToken)
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Categoria inválida");
  });

  it("Should throw a quantity error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      quantity: 0,
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .set("Authorization", testToken)
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe(
      "A quantidade deve ser maior que 0"
    );
  });
});
