import { Router } from "express";
import { authRequired } from "../Middlewares/validateToken.js";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../Controllers/tasks.controllers.js";
import { validateSchema } from "../Middlewares/validator.middleware.js";
import { createSchema } from "../Schemas/task.schema.js";

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/task/:id', authRequired, getTask)
router.post('/task', authRequired, validateSchema(createSchema), createTask)
router.put('/task/:id', authRequired, updateTask)
router.delete('/task/:id', authRequired, deleteTask)

export default router