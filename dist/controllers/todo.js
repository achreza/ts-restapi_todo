"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToDo = exports.getTodoById = exports.getAllToDo = exports.deleteToDo = exports.createToDo = void 0;
const todos_1 = require("../models/todos");
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var todos = yield todos_1.Todos.create(Object.assign({}, req.body));
    return res.status(200).json({ message: "Todo created successfully", data: todos });
});
exports.createToDo = createToDo;
const deleteToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedTodo = yield todos_1.Todos.findByPk(id);
    yield todos_1.Todos.destroy({ where: { id } });
    return res.status(200).json({ message: "Todo deleted successfully", data: deletedTodo });
});
exports.deleteToDo = deleteToDo;
const getAllToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todos_1.Todos.findAll();
    return res.status(200).json({ message: "Todo Fetched Successfully", data: todos });
});
exports.getAllToDo = getAllToDo;
const getTodoById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todos = yield todos_1.Todos.findByPk(id);
    return res.status(200).json({ message: "Todo Fetched Successfully", data: todos });
});
exports.getTodoById = getTodoById;
const updateToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield todos_1.Todos.update(Object.assign({}, req.body), { where: { id } });
    const updatedTodos = yield todos_1.Todos.findByPk(id);
    return res.status(200).json({ message: "Todo Updated Successfully", data: updatedTodos });
});
exports.updateToDo = updateToDo;
