import express from "express";
import { celebrate, Joi } from "celebrate";//Validação direto no express

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//Padrões para nomes nos controllers
//index -> Listagem
//show -> Unico registro
//create
//update

routes.get("/items", itemsController.index);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.post("/points",
 upload.single("image"),
  pointsController.create,
  celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required,
        longitude: Joi.number().required,
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required()//Adicionar regex
    })
  },
  {
      abortEarly: false
  })
  );

export default routes;
