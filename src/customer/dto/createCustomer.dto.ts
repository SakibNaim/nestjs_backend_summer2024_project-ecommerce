import { IsNotEmpty, IsNumber } from "class-validator";



export class CreateCustomerDto{



   //@IsNumber()
   //adminID:number;

   @IsNotEmpty()
    productname:string;

    @IsNumber()
    productprice:number;

    @IsNumber()
    productquantity:number;

    



}