import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { Admin } from 'src/entity/admin.entity';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
export declare class AdminService {
    private adminRepo;
    constructor(adminRepo: Repository<Admin>);
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    create(dto: CreateAdminDto): Promise<CreateAdminDto & Admin>;
    Userupdate(id: number, dto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
