import { AuthService } from './auth.service';
import { authLoadDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(authloaddto: authLoadDto): string;
}
