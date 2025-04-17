import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    usersService: UsersService;

    constructor(){
        this.usersService = new UsersService();
    }
    @Get()
    getAllUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, 
                @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){
        
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(typeof id, id);
        return this.usersService.getUserById(id);
    }

    @Post()
    createUsers(){
        const user = {id: 4, name: "shruti", age: 22, gender: "female", isMarried: false};
        this.usersService.createUser(user);
        return 'A new user has been created!!'
    }
}
