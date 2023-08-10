import { UserI } from "./AuthI";

export namespace AuthR {

    export namespace register {

        export const route = '/auth/register';

        export interface RequestI {
            name: string;
            surname?: string;
            email: string;
            password: string;
        }

        export interface ResponseI { }
    }

    export namespace getUsers {

        export const route = '/auth/get-users';

        export interface RequestI { }

        export interface ResponseI {
            users: UserI[];
        }
    }

    export namespace loginByEmail {

        export const route = '/auth/login-by-email';

        export interface RequestI {
            email: string;
            password: string;
        }

        export interface ResponseI { 
            user: UserI
         }
    }

}
