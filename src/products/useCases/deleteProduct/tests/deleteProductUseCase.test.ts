import { DeleteProductUseCase } from "../deleteProductUseCase";
import { ProductRepositoryMock } from "../../../../testUtils/productRepositoryMock";
import { creationBody } from "../../../../testUtils/productMockData";

describe("Delete Product UseCase", () => {
  it("Should be able to delete a product", async () => {
    //given
    const productRepositoryMock = new ProductRepositoryMock();
    let createProductUseCase = new DeleteProductUseCase(productRepositoryMock);

    //when
    await createProductUseCase.execute("1", "1");

    //then
    expect(productRepositoryMock.delete).toHaveBeenCalledWith(creationBody);
  });
});
