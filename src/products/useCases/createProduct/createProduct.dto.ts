import { IProduct } from "../../../interfaces/IProduct";
import { IsNotEmpty, IsEnum, validateSync, Min } from "class-validator";
import { Category } from "../../../enums/category.enum";
import { StatusCodes } from "http-status-codes";
import { GetFirstErrorMessage, HttpRequestError } from "../../../exceptions";

class CreateProductDto {
  constructor(props: Partial<IProduct>) {
    this.title = props.title;
    this.category = props.category;
    this.price = props.price;
    this.quantity = props.quantity;
    this.description = props.description;
    this.details = props.details;

    const errors = validateSync(this);
    console.log("nenum erro");
    console.log(errors);
    if (errors.length) {
      const getFirstErrorMessage = new GetFirstErrorMessage();
      const message = getFirstErrorMessage.execute(errors);
      throw new HttpRequestError(StatusCodes.BAD_REQUEST, message);
    }
  }

  @IsNotEmpty({ message: "Título não informado" })
  title: string;

  @IsNotEmpty({ message: "Preço não informado" })
  @Min(1, { message: "O preço deve ser maior que 0" })
  price: number;

  @IsNotEmpty({ message: "Quantidade não informada" })
  @Min(1, { message: "A quantidade deve ser maior que 0" })
  @IsNotEmpty({ message: "Quantidade não informada" })
  quantity: number;

  @IsNotEmpty({ message: "Categori não informada" })
  @IsEnum(Category, { message: "Categoria inválida" })
  category: string;

  description?: string;
  details?: string[];
}

export { CreateProductDto };
