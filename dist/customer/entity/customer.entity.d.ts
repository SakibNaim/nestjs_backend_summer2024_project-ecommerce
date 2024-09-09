import { Admin } from 'src/entity/admin.entity';
import { Manager } from "src/manager/entities/manager.entity";
export declare class Customer {
    id: number;
    productname: string;
    productprice: number;
    productquantity: number;
    admin: Admin;
    manger: Manager[];
}
