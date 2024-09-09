import { Injectable, NotFoundException } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { Admin } from 'src/entity/admin.entity';
import { UpdateAdminDto } from './dto/updateAdmin.dto';




@Injectable()
export class AdminService {

constructor(@InjectRepository(Admin) private adminRepo:Repository<Admin>){}
//constructor(@InjectRepository(Admin) private adminRepo:Repository<Customer>,){}


     async findAll(){
        return await this.adminRepo.find();

     }

     //authentication
    //  async findByEmail(Email:string){
    //     return await this.adminRepo.findOne({
    //         where:{
    //             Email,

    //         },
    //     });
    //  }

   async findOne(id:number){
   const Admin = await  this.adminRepo.findOne({
        where:{
            id,
        },
        relations:{
            customer:true,
        }
    });
    if(!Admin) throw new NotFoundException();
    return Admin;
   }

    
   async create(dto: CreateAdminDto){

     const admin =this.adminRepo.create();
    return await this.adminRepo.save(dto);


   }

   


   

   async Userupdate(id:number, dto:UpdateAdminDto){
    return await this.adminRepo.update({id}, dto);
   }

    async delete(id:number){
    return await this.adminRepo.delete({
        id,
    });
   }

    

     }

    

    



