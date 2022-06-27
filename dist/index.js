"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./rotes/router"));
const app = (0, express_1.default)();
const port = 3000;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server')
// })
// app.get('/user', (req: Request, res: Response) => {
//   res.send('asdasdasdasd')
// })
app.use('/api', router_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
