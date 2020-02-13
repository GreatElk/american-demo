import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'app/_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    getById(id: number) {
        throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }
    // Registration form request
    register(user: User) {
        return this.http.post(`/users/register`, user);
    }


    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}
