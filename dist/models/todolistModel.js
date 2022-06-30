"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todolist = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TodolistSchema = new mongoose_1.default.Schema({
    user_id: { type: mongoose_1.default.Types.ObjectId, required: true, ref: 'user' },
    title: { type: String, required: true, minLength: 3, maxLength: 100 },
    tasks: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'task', default: [] }]
}, { collection: 'todolists' });
exports.todolist = mongoose_1.default.model('todolist', TodolistSchema);
