import request from "supertest";
import { app } from "../../../../server";
import { CreateProduct } from "../createProduct";
import { IProduct } from "../../../../interfaces/IProduct";
import { ProductRepository } from "../../../products.repository";

jest.mock("../createProduct");

describe("Create Product Controller", () => {
  it("Should be able to create a product", async () => {
    //given
    const creationBody = {
      title: "Refrigerator",
      price: 2000,
      category: "home",
      quantity: 5,
      description: "Consul Refrigerator 400 L",
      details: ["Color: White", "Condition: New"],
    };

    const productRepository = new ProductRepository();
    const createProductInstance = new CreateProduct(productRepository);

    jest
      .spyOn(createProductInstance, "execute")
      .mockImplementation(async (createBody: IProduct) => {
        console.log("This is the mock deal");
        console.log(createBody);
      });

    //when
    const response = await request(app)
      .post("/api/v1/products")
      .send(creationBody);

    //then
    expect(response.statusCode).toBe(201);
  });
});
