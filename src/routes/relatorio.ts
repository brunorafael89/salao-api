import { Router } from 'express';
import RelatorioController from '../controllers/relatorio';
import auth from "../middleware/auth";

const relatorioRouter = Router();
//relatorioRouter.use(auth);

const relatorioController = new RelatorioController();

relatorioRouter.get('/comissao', relatorioController.relatorioComissao);
relatorioRouter.get('/servico/:profissional_id/:servicos_id/:dataFrom/:dataTo', relatorioController.relatorioServico);

export default relatorioRouter;