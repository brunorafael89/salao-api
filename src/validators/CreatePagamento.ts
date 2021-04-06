import * as Yup from 'yup';
import { Request, Response, NextFunction } from 'express';

export default async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const schema = Yup.object().shape({
      total: Yup.number().required('Este é um campo obrigatório'), 
      autorizado: Yup.boolean().required('Este um campo obrigatório'), 
    });

    await schema.validate(request.body, { abortEarly: false });

    return next();
  } catch (err) {
    return response
      .status(400)
      .json({ error: 'Campo inválido', messages: err.inner });
  }
};