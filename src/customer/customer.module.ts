import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { AppController } from 'src/app.controller';
import { Customer } from './entity/customer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Customer]),],
  exports:[TypeOrmModule],
  providers: [AppService,CustomerService],
  controllers:[AppController,CustomerController]
})
export class CustomerModule {}
