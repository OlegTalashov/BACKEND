import AuthSQL from './AuthSQL';
import { AuthR as R } from "./AuthR";
import { UserI } from "./AuthI";
import bcrypt from 'bcrypt'

export class AuthM {
    public async register(data: R.register.RequestI): Promise<R.register.ResponseI> {
        const vUserData: UserI = data;

        const sPasswordHashed = await bcrypt.hash(data.password, 10);
        const sEmailHashed = await bcrypt.hash(data.email, 10);

        vUserData.email = sEmailHashed;
        vUserData.password = sPasswordHashed;

        await AuthSQL.register(vUserData);

        return {}
    }

    public async loginByEmail(data: R.loginByEmail.RequestI): Promise<R.loginByEmail.ResponseI> {

        const sPasswordHashed = await bcrypt.hash(data.password, 10);

        const bPasswordCorrect = bcrypt.compare(data.password, sPasswordHashed, (err, result) => {
            if (err) {
                console.error(err);
            } else {
                return true
            }
        })

        const vRespData = await AuthSQL.loginByEmail({
            email: 'TODO EMAILHASHED',
            password: sPasswordHashed
        })        

        return vRespData;
    }

    public async getUsers(data: R.getUsers.RequestI): Promise<R.getUsers.ResponseI> {
        const vRespData = await AuthSQL.getUsers(data);

        return vRespData;
    }
}
