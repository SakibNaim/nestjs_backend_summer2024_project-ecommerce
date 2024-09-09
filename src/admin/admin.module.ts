import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';





@Module({

  imports:[TypeOrmModule.forFeature([Admin])],
  exports: [TypeOrmModule],
  providers: [AppService,AdminService],
  controllers:[AppController,AdminController]
})
export class AdminModule {}
