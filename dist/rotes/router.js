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
const userModel_1 = require("../models/userModel/userModel");
const usersRouter = express_1.default.Router({ mergeParams: true });
usersRouter.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.id) {
            res.send(yield userModel_1.user.findById({ _id: req.query.id }));
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
usersRouter.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield userModel_1.user.create(req.body);
        res.send(newUser);
    }
    catch (e) {
        res.statusCode = 500;
        res.send(e.message);
    }
}));
usersRouter.delete('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield userModel_1.user.findByIdAndDelete({ _id: req.query.id }, (err) => {
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
usersRouter.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    userModel_1.user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        strictQuery: true,
        runValidators: true,
    }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.send(`Name: ${user.name}, email: ${user.email}`);
    });
}));
exports.default = usersRouter;
