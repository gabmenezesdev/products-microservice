import { MongoMemoryReplSet } from "mongodb-memory-server";
import mongoose from "mongoose";
import { ProductRepository } from "./products.repository";
import productSchema from "./product.schema";
import { creationBody, updateBody } from "../testUtils/productMockData";

let replset;
// let productRepository;
let productSchemaInstance = productSchema;

// Antes de iniciar os testes, configure o servidor MongoDB em memória
beforeAll(async () => {
  replset = await MongoMemoryReplSet.create({ replSet: { count: 3 } });
  const mongoUri = replset.getUri();
  await mongoose.connect(mongoUri, {});
});

// Antes de cada teste, crie uma nova instância do repositório
// beforeEach(() => {
//   productRepository = new ProductRepository();
// });

// Após cada teste, limpe o banco de dados e feche a conexão
// afterEach(async () => {
//   await mongoose.connection.dropDatabase();
// });

// Após todos os testes, pare o servidor MongoDB em memória e feche a conexão
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await replset.stop();
});

describe("Product Repository Tests", () => {
  let createdProductId = "";
  const productRepository = new ProductRepository();

  test("should save a product to the database", async () => {
    await productRepository.save(creationBody);
    const foundProduct = await productSchemaInstance.findOne({
      title: "Refrigerator",
    });
    createdProductId = foundProduct._id;
    expect(foundProduct).toBeDefined();
    expect(foundProduct).toHaveProperty("_id");
    expect(foundProduct.title).toBe("Refrigerator");
  });

  test("should get a product from the database", async () => {
    console.log(createdProductId);
    const foundProduct = await productRepository.findById(createdProductId);

    expect(foundProduct).toBeDefined();
    expect(foundProduct.title).toBe("Refrigerator");
  });

  test("should update a product from the database", async () => {
    await productRepository.update(createdProductId, updateBody);

    const foundProduct = await productSchemaInstance
      .findOne({
        _id: createdProductId,
      })
      .lean();

    expect(foundProduct).toBeDefined();
    expect(foundProduct).toEqual(expect.objectContaining(updateBody));
  });
});
