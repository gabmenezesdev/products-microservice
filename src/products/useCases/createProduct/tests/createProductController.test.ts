import request from "supertest";
import { app } from "../../../../server";
import { CreateProductUseCase } from "../createProductUseCase";
import { IProduct } from "../../../../interfaces/IProduct";

jest.mock("../createProductUseCase");

describe("Create Product Controller", () => {
  jest
    .spyOn(CreateProductUseCase.prototype, "execute")
    .mockImplementation(async (createBody: IProduct) => {});

  const creationBody = {
    title: "Refrigerator",
    price: 2000,
    category: "home",
    quantity: 5,
    description: "Consul Refrigerator 400 L",
    details: ["Color: White", "Condition: New"],
  };

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
