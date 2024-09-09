import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './admin/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './dbConfig';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { ManagerModule } from './manager/manager.module';
//import { ManagerService } from './manager/manager.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerService } from './manager/manager.service';
import { AuthModule } from './auth/auth.module';





@Module({
  imports: [TypeOrmModule.forRoot(pgConfig),AdminModule,CustomerModule,ManagerModule,ManagerModule, AuthModule],
  controllers: [AdminController,AppController, CustomerController,],
  providers: [AdminService,AppService,CustomerService,],
})
export class AppModule {}

