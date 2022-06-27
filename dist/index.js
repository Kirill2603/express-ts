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
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./rotes/router"));
const app = (0, express_1.default)();
const port = 3000;
const DB_URL = 'mongodb+srv://kirill:kirill@cluster0.c5o7vvn.mongodb.net/todolistDB?retryWrites=true&w=majority';
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server')
// })
// app.get('/user', (req: Request, res: Response) => {
//   res.send('asdasdasdasd')
// })
app.use(express_1.default.json());
app.use('/api', router_1.default);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(DB_URL);
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    }
    catch (e) {
        console.log(e);
    }
}));
