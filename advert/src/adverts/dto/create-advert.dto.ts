import { IsNumber, IsString, IsNotEmpty, IsUrl } from "class-validator";

export class CreateAdvertDto {
    @IsNumber()
    @IsNotEmpty()
    sell: number;

    @IsNumber()
    @IsNotEmpty()
    buy: number;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    url:string
    
}
