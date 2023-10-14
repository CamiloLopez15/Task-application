import { Router } from "express";
import {
  login,
  logout,
  profile,
  updateProfile,
  register,
  verifyToken,
  updatePassword,
} from "../Controllers/auth.controllers.js";
import { authRequired } from "../Middlewares/validateToken.js";
import { validateSchema } from "../Middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../Schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);
router.put("/profile", authRequired, updateProfile);
router.put("/updatePassword", authRequired, updatePassword, logout);

export default router;
