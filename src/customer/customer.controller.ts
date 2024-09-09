import { Body, Controller,Delete,Get, Param, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateAdmin.dto';

@Controller('customer')
export class CustomerController {

    constructor (private customerService:CustomerService){}

    @Get()
    findAll(){

     return this.customerService.findAll();
    }

    @Get(':id')
    findone(@Param("id") id){
     return this.customerService.findOne(id);

    }

//validation dto(new admin user)
    @Post("/addcustomeruser")
    //@UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    create(@Body( new ValidationPipe({ whitelist:true })) dto:CreateCustomerDto){
      return  this.customerService.create(dto);

    }
    //update data from new admin user
     @Put('updatecustomeruser')
     update ( @Param('id') id: string,@Body() body:CreateCustomerDto ) {
        return body;
     }

    @Patch(":id")
    Userupdate(@Param('id')id,
     @Body() body:UpdateCustomerDto,

    )

{
        return this.customerService.Userupdate(id,body);
    }

    @Delete(":id")
     delete(@Param ("id",)id){
        return this.customerService.delete(id);
    }
}

