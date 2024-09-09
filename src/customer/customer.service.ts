import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateAdmin.dto';
import { Customer } from './entity/customer.entity';

@Injectable()
export class CustomerService {


    constructor(@InjectRepository(Customer) private customerRepo:Repository<Customer>){}

  
    async findAll(){
        return await this.customerRepo.find({
            relations:{
                admin:true,
                
            }
        });

     }

   async findOne(id:number){
   const Admin = await  this.customerRepo.findOne({
        where:{
            id,
        },
    });
    if(!Admin) throw new NotFoundException();
    return Admin;
   }

    
   async create(dto: CreateCustomerDto){
    return await this.customerRepo.save(dto);


   }

   


   

   async Userupdate(id:number, dto:UpdateCustomerDto){
    return await this.customerRepo.update({id}, dto);
   }

    async delete(id:number){
    return await this.customerRepo.delete({
        id,
    });
   }


}


