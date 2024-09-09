import { JwtService } from '@nestjs/jwt';
import { authLoadDto } from './dto/auth.dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    validateUser({ usnername, password }: authLoadDto): string;
}
