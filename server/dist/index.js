"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const buildings = [
    // Замки
    { x: 100, y: 100, type: 'castle', owner: 'E' },
    { x: 600, y: 100, type: 'castle', owner: 'K' },
    // Казармы
    { x: 50, y: 200, type: 'barrack', owner: 'E' },
    { x: 150, y: 200, type: 'barrack', owner: 'E' },
    { x: 250, y: 200, type: 'barrack', owner: 'E' },
    { x: 50, y: 300, type: 'barrack', owner: 'E' },
    { x: 150, y: 300, type: 'barrack', owner: 'E' },
    { x: 650, y: 200, type: 'barrack', owner: 'K' },
    { x: 750, y: 200, type: 'barrack', owner: 'K' },
    { x: 850, y: 200, type: 'barrack', owner: 'K' },
    { x: 650, y: 300, type: 'barrack', owner: 'K' },
    { x: 750, y: 300, type: 'barrack', owner: 'K' },
    // Шахты
    { x: 80, y: 400, type: 'mine', owner: 'E' },
    { x: 180, y: 400, type: 'mine', owner: 'E' },
    { x: 280, y: 400, type: 'mine', owner: 'E' },
    { x: 680, y: 400, type: 'mine', owner: 'K' },
    { x: 780, y: 400, type: 'mine', owner: 'K' },
    { x: 880, y: 400, type: 'mine', owner: 'K' },
    // Стрельбища
    { x: 100, y: 500, type: 'range', owner: 'E' },
    { x: 200, y: 500, type: 'range', owner: 'E' },
    { x: 300, y: 500, type: 'range', owner: 'E' },
    { x: 400, y: 500, type: 'range', owner: 'E' },
    { x: 700, y: 500, type: 'range', owner: 'K' },
    { x: 800, y: 500, type: 'range', owner: 'K' },
    { x: 900, y: 500, type: 'range', owner: 'K' },
    { x: 1000, y: 500, type: 'range', owner: 'K' }
];
app.get('/api/game-data', (req, res) => {
    res.json(buildings);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
