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
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
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
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
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
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
  });

  it("Should throw a description error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      description: "",
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
  });

  it("Should throw a details error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      details: null,
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
  });

  it("Should throw an user error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      user: "",
    };

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .send(partialCreation);

    //then
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.text).message).toBe("Título não informado");
  });

  it("Should throw a company error", async () => {
    //given
    const partialCreation = {
      ...creationBody,
      user: "",
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
