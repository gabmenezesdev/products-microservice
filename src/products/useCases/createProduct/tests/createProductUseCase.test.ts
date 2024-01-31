import { CreateProductUseCase } from "../createProductUseCase";
import { ProductRepositoryMock } from "./productRepositoryMock";

describe("Create Product UseCase", () => {
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
    const productRepositoryMock = new ProductRepositoryMock();
    let createProductUseCase = new CreateProductUseCase(productRepositoryMock);

    //when
    await createProductUseCase.execute(creationBody);

    //then
    expect(productRepositoryMock.save).toHaveBeenCalledWith(creationBody);
  });
});
