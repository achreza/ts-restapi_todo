import { Router } from "express";

import { createToDo, deleteToDo, getAllToDo, updateToDo, getTodoById } from "../controllers/todo";

const router = Router();

router.post("/", createToDo);
router.get("/", getAllToDo);
router.get("/:id", getTodoById);
router.put("/:id", updateToDo);
router.delete("/:id", deleteToDo);

export default router;
