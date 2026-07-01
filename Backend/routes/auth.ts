import express from 'express';
import { logInHandler, logOutHandler, signUpHandler } from '../controllers/authController';


const route = express.Router();

route.post("/login", logInHandler);
route.post("/signup", signUpHandler);
route.post("/logout", logOutHandler);

export default route;
