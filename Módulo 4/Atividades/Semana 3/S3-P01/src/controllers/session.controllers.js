import { userLoginService } from "../services/sessions/userLogin.service";

export async function userLoginController(req, res) {
    const [status, token] = await userLoginService(req.body);
    return res.status(status).json(token);
}