import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(){
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: any){
        const usersService = new UsersService();
        return usersService.getUserById(+id);
    }

    @Post()
    createUsers(){
        const usersService = new UsersService();
        const user = {id: 4, name: "shruti", age: 22, gender: "female", isMarried: false}
        usersService.createUser(user);
        return 'A new user has been created!!'
    }
}
