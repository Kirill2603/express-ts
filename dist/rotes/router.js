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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = require("../models/userModel");
const todolistModel_1 = require("../models/todolistModel");
const taskModel_1 = require("../models/taskModel");
const router = express_1.default.Router({ mergeParams: true });
//users--------------------------------
router.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.params.id) {
            res.send(yield userModel_1.user.findById({ _id: req.params.id }));
        }
        else {
            res.send(yield userModel_1.user.find({}));
        }
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userModel_1.user.find({}));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield userModel_1.user.create(req.body);
        res.send(newUser);
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userModel_1.user.findByIdAndDelete({ _id: req.params.id }, (err) => {
            if (err) {
                res.statusCode = 500;
                res.send('User not found');
            }
        }));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    userModel_1.user.findByIdAndUpdate(req.params.id, { '$set': req.body }, {
        new: true,
        runValidators: true,
        strictQuery: true,
    }, (err, user) => {
        if (err) {
            res.send(err.message);
        }
        res.send(user);
    });
}));
//todolists--------------------------------
router.get('/users/:id/todolists', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield todolistModel_1.todolist.find({ user_id: req.params.id }));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.post('/users/:id/todolists', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield todolistModel_1.todolist.create(Object.assign({ user_id: req.params.id }, req.body)));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.delete('/users/:id/todolists/:todolistId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield todolistModel_1.todolist.findByIdAndDelete(req.params.todolistId));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.put('/users/:id/todolists/:todolistId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    todolistModel_1.todolist.findByIdAndUpdate(req.params.todolistId, { '$set': req.body }, {
        new: true,
        runValidators: true,
        strictQuery: true,
    }, (err, todolist) => {
        if (err) {
            res.send(err.message);
        }
        res.send(todolist);
    });
}));
//tasks--------------------------------
router.post('/users/:id/todolists/:todolistId/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield taskModel_1.task.create(Object.assign({ todolist_id: req.params.todolistId }, req.body)));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.get('/users/:id/todolists/:todolistId/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield taskModel_1.task.find({ todolist_id: req.params.todolistId }));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.delete('/users/:id/todolists/:todolistId/tasks/:taskId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield taskModel_1.task.findByIdAndDelete(req.params.taskId));
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
router.put('/users/:id/todolists/:todolistId/tasks/:taskId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    taskModel_1.task.findByIdAndUpdate(req.params.taskId, { '$set': req.body }, {
        new: true,
        runValidators: true,
        strictQuery: true,
    }, (err, task) => {
        if (err) {
            res.send(err.message);
        }
        res.send(task);
    });
}));
exports.default = router;
