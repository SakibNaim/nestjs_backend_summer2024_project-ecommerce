import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateAdmin.dto';
import { Customer } from './entity/customer.entity';
export declare class CustomerService {
    private customerRepo;
    constructor(customerRepo: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(dto: CreateCustomerDto): Promise<CreateCustomerDto & Customer>;
    Userupdate(id: number, dto: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
