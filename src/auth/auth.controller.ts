import { Body, Controller, HttpException, Post,Session ,Get, UseGuards} from '@nestjs/common';

import { AuthService } from './auth.service';
import { authLoadDto } from './dto/auth.dto';
import { console } from 'inspector/promises';
import { session } from 'passport';
//import { Session } from 'inspector/promises';
//import { session } from 'passport';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {

//@UseGuards(AuthGuard('local'))

constructor (private authService : AuthService){}





   @Post("login")
   login(@Body() authloaddto:authLoadDto){
    const user = this.authService.validateUser(authloaddto);
    if(!user) throw new HttpException('Invalid data',401);
    return user;

//session apllied









   }



    
}
