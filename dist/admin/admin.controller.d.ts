import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    findAll(): Promise<import("../entity/admin.entity").Admin[]>;
    findone(id: any): Promise<import("../entity/admin.entity").Admin>;
    create(dto: CreateAdminDto): Promise<CreateAdminDto & import("../entity/admin.entity").Admin>;
    update(id: string, body: CreateAdminDto): CreateAdminDto;
    Userupdate(id: any, body: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    delete(id: any): Promise<import("typeorm").DeleteResult>;
}
