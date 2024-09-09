import { Customer } from "src/customer/entity/customer.entity";
export declare class Manager {
    id: number;
    username: string;
    location: string;
    password: string;
    hashPassword(): Promise<void>;
    customer: Customer[];
}
