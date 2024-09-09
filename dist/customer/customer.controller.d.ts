import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateAdmin.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<import("./entity/customer.entity").Customer[]>;
    findone(id: any): Promise<import("./entity/customer.entity").Customer>;
    create(dto: CreateCustomerDto): Promise<CreateCustomerDto & import("./entity/customer.entity").Customer>;
    update(id: string, body: CreateCustomerDto): CreateCustomerDto;
    Userupdate(id: any, body: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
