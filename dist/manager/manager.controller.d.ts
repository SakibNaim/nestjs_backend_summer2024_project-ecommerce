import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
export declare class ManagerController {
    private readonly managerService;
    constructor(managerService: ManagerService);
    create(createManagerDto: CreateManagerDto): Promise<import("./entities/manager.entity").Manager>;
    findAll(): Promise<import("./entities/manager.entity").Manager[]>;
    findOne(id: any): Promise<import("./entities/manager.entity").Manager>;
    update(id: any, body: UpdateManagerDto): Promise<string>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
