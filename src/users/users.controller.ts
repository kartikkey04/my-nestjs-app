import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

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
    createUsers(@Body(new ValidationPipe()) user: CreateUserDto){
        // this.usersService.createUser(user);
        return 'A new user has been created!!'
    }
}
