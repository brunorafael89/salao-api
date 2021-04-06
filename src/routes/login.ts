import { Router } from 'express';
import LoginController from '../controllers/login';
import ValidatorCreateLogin from '../validators/CreateLogin'

const loginRouter = Router();

const loginController = new LoginController();

//loginRouter.post('/', loginController.login);
loginRouter.post('/', ValidatorCreateLogin, loginController.login);
//loginRouter.put('/:perfil_acesso_id, usuario_id', ValidatorCreateLogin, loginController.update);

export default loginRouter;