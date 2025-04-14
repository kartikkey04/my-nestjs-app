import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users: {id:number, name: string, age: number, gender: string, isMarried: boolean}[] = [
        {id: 1, name: "kartikey", age: 22, gender: "male", isMarried: false},
        {id: 2, name: "shivam", age: 23, gender: "male", isMarried: false},
        {id: 3, name: "prakhar", age: 22, gender: "male", isMarried: false}
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x => x.id === id);
    }

    createUser(user: {id:number, name: string, age: number, gender: string, isMarried: boolean}){
        this.users.push(user);
    }
}
