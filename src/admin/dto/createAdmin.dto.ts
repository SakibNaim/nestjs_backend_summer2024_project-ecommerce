import{ IsInt, IsNotEmpty, IsNumber, IsString, Length,  } from 'class-validator';


export class CreateAdminDto{

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    Email:string;
    
    @IsNumber()
    //@IsNotEmpty({message:"create a 8 digit password number" })
    password:number;

    
    




}