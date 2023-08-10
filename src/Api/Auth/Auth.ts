import * as express from 'express'
import { AuthR as R } from './AuthR';
import { AuthM } from './AuthM';

export const router = express.Router();

/**
 * API Авторизации
 */
class Auth {
    public AuthM: AuthM;

    constructor(){
        this.AuthM = new AuthM
    }
}

router.post(R.register.route, async (req, res) => {
    
    const ctrl = new Auth;
    const request: R.register.RequestI = req.body;
    const response: R.register.ResponseI = await ctrl.AuthM.register(request);

    res.status(201).json(response);
})

router.post(R.loginByEmail.route, async (req, res) => {

    const ctrl = new Auth;
    const request: R.loginByEmail.RequestI = req.body;
    const response: R.loginByEmail.ResponseI = await ctrl.AuthM.loginByEmail(request);

    res.status(201).json(response);
})

router.post(R.getUsers.route, async (req, res) => {

    const ctrl = new Auth;
    const request: R.register.RequestI = req.body;
    const response: R.getUsers.ResponseI = await ctrl.AuthM.getUsers(request);

    res.status(201).json(response);
})

export { router as AuthRouter };
