import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { authLoadDto } from './dto/auth.dto';


const fakeUsers=[
    {
        id:1,
        username:"naim",
        password:"passsword",


    },


    {
        id:2,
        username:"rakibul",
        password:"password12",
    }
];






@Injectable()
export class AuthService {
    constructor ( private jwtService:JwtService){}

    validateUser({usnername,password}:authLoadDto){


        const findUsers = fakeUsers.find((user) => user.username === usnername);
        if(!findUsers) return  null;

        //password
        if (password ===  findUsers.password){
            const {password, ...user} = findUsers;
          return  this.jwtService.sign(user);


        }

    }
}
