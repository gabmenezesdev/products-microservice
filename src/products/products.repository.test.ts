import { MongoMemoryReplSet } from "mongodb-memory-server";
import mongoose from "mongoose";
import { ProductRepository } from "./products.repository";
import productSchema from "./product.schema";

let replset;
let productRepository;
let productSchemaInstance = productSchema;

// Antes de iniciar os testes, configure o servidor MongoDB em memória
beforeAll(async () => {
  replset = await MongoMemoryReplSet.create({ replSet: { count: 3 } });
  const mongoUri = replset.getUri();
  await mongoose.connect(mongoUri, {});
});

// Antes de cada teste, crie uma nova instância do repositório
beforeEach(() => {
  productRepository = new ProductRepository();
});

// Após cada teste, limpe o banco de dados e feche a conexão
afterEach(async () => {
  await mongoose.connection.dropDatabase();
});

// Após todos os testes, pare o servidor MongoDB em memória e feche a conexão
afterAll(async () => {
  await mongoose.disconnect();
  await replset.stop();
});

describe("Product Repository Tests", () => {
  const creationBody = {
    title: "Refrigerator",
    price: 2000,
    category: "home",
    quantity: 5,
    description: "Consul Refrigerator 400 L",
    details: ["Color: White", "Condition: New"],
  };

  test("should save a product to the database", async () => {
    await productRepository.save(creationBody);
    const productSchema = await productSchemaInstance.findOne({
      title: "Refrigerator",
    });

    expect(productSchema).toBeDefined();
    expect(productSchema.title).toBe("Refrigerator");
  });
});
