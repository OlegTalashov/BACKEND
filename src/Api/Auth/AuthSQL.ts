import { dbUser } from "../../Common/System/db_connections";
import { AuthR as R } from "./AuthR";
import { UserI } from "./AuthI";


class AuthSQL {

    public async register(data: R.register.RequestI): Promise<R.register.ResponseI> {
        let res: R.register.ResponseI = {};

        try {
            await dbUser('users').insert(data);
        } catch (e) {
            console.log(e);
        }

        return res;
    }

    public async loginByEmail(data: R.loginByEmail.RequestI): Promise<R.loginByEmail.ResponseI> {
        let vUserInfo: UserI = <UserI>{};
        try {
            vUserInfo = await dbUser('users')
                .select()
                .where('email', data.email)
                .andWhere('password', data.password)
                .first()
        } catch (e) {
            console.log(e);
        }

        return {
            user: vUserInfo
        };
    }

    public async getUsers(data: R.getUsers.RequestI): Promise<R.getUsers.ResponseI> {
        let res: R.getUsers.ResponseI;
        let avUsers: UserI[] = [];

        try {
            avUsers = await dbUser('users')
                .select();
        } catch (e) {
            console.log(e);
        }

        res = {
            users: avUsers,
        };

        return res;
    }

}

const Auth = new AuthSQL;

export default Auth;
