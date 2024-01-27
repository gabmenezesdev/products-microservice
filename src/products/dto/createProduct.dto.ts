import { IProduct } from "../../interfaces/IProduct";
import { IsNotEmpty, MinLength, IsEnum, validateSync } from 'class-validator';
import { Category } from "../../enums/category.enum";

class CreateProductDto {
    constructor(props: IProduct){
        this.title = props.title;
        this.category = props.category;
        this.price = props.price;
        this.quantity = props.quantity;
        this.description = props.description;
        this.details = props.details;

        validateSync(this);
    }

    @IsNotEmpty({ message: 'Título não informado' })
    title: string;

    @IsNotEmpty({ message: 'Preço não informado' })
    price: number;

    @IsNotEmpty({ message: 'Quantidade não informada' })
    @MinLength(1,{ message: 'A quantidade deve ser maior que 0'})

    @IsNotEmpty({ message: 'Quantidade não informada' })
    quantity: number

    @IsNotEmpty({ message: 'Categori não informada' })
    @IsEnum(Category, {message: 'Categoria inválida'})
    category: string

    description?: string
    details?: string[]

}

export { CreateProductDto }