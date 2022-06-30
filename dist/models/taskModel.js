"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    todolist_id: { type: mongoose_1.default.Types.ObjectId, required: true, ref: 'todolist' },
    task_title: { type: String, required: true, minLength: 3, maxLength: 100 },
    description: { type: String, required: false, maxLength: 100, default: '' },
    priority: { type: String, enum: ['low', 'middle', 'high'], default: 'low' },
    is_done: { type: Boolean, default: false },
}, { collection: 'task' });
exports.task = mongoose_1.default.model('task', TaskSchema);
