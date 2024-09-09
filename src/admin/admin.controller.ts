import { Body, Controller ,Delete,Get, Param, ParseUUIDPipe, Patch, Post,Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/updateAdmin.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminService:AdminService){}

    @Get()
    findAll(){

     return this.adminService.findAll();
    }

    @Get(':id')
    findone(@Param("id") id){
     return this.adminService.findOne(id);

    }

//validation dto(new admin user)
    @Post("/addadminuser")
    //@UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
    create(@Body( new ValidationPipe({ whitelist:true })) dto:CreateAdminDto){
      return  this.adminService.create(dto);

    }
    //update data from new admin user
     @Put('updateadminuser')
     update ( @Param('id') id: string,@Body() body:CreateAdminDto ) {
        return body;
     }

    @Patch(":id")
    Userupdate(@Param('id')id,
     @Body() body:UpdateAdminDto,

    )

{
        return this.adminService.Userupdate(id,body);
    }

    @Delete(":id")
     delete(@Param ("id",)id){
        return this.adminService.delete(id);
    }



    }







