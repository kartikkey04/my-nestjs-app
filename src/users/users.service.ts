import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    users: {id:number, name: string, email: string, gender: string, isMarried: boolean}[] = [
        {id: 1, name: "kartikey", email: "shrivkartik@gmail" , gender: "male", isMarried: false},
        {id: 2, name: "shivam", email: "shivampathak9500@gmail.com", gender: "male", isMarried: false},
        {id: 3, name: "prakhar", email: "keshavbajapi@gmail.com", gender: "male", isMarried: false},
        {id: 4, name: "manisha", email: "manishabamboo@gmail.com", gender: "female", isMarried: false}
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x => x.id === id);
    }

    createUser(user: {id:number, name: string, email: string, gender: string, isMarried: boolean}){
        this.users.push(user);
    }
}
