import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';
export declare class ManagerService {
    private managerRepo;
    constructor(managerRepo: Repository<Manager>);
    create(createManagerDto: CreateManagerDto): Promise<Manager>;
    findByusername(username: string): Promise<Manager>;
    findAll(): Promise<Manager[]>;
    findOne(id: number): Promise<Manager>;
    update(id: number, updateManagerDto: UpdateManagerDto): Promise<string>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
