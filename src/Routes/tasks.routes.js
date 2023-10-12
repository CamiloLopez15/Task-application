import { Router } from "express";
import { authRequired } from "../Middlewares/validateToken.js";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../Controllers/tasks.controllers.js";
import { validateSchema } from "../Middlewares/validator.middleware.js";
import { createSchema } from "../Schemas/task.schema.js";

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(createSchema), createTask)
router.put('/tasks/:id', authRequired, updateTask)
router.delete('/tasks/:id', authRequired, deleteTask)

export default router