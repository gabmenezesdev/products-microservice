import { CreateProductUseCase } from "../deleteProductUseCase";
import { ProductRepositoryMock } from "../../../../testUtils/productRepositoryMock";
import { creationBody } from "../../../../testUtils/productMockData";

describe("Create Product UseCase", () => {
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
