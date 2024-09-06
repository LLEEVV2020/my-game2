import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import "./Game.css";

interface Building {
    x: number;
    y: number;
    type: string;
    owner: string;
}

const Game: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameData, setGameData] = useState<Building[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/api/game-data');
            setGameData(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                gameData.forEach(building => {
                    switch (building.type) {
                        case 'castle':
                            ctx.fillStyle = 'red';
                            break;
                        case 'barrack':
                            ctx.fillStyle = 'blue';
                            break;
                        case 'mine':
                            ctx.fillStyle = 'brown';
                            break;
                        case 'range':
                            ctx.fillStyle = 'green';
                            break;
                        default:
                            ctx.fillStyle = 'black';
                    }
                    ctx.beginPath();
                    ctx.rect(building.x, building.y, 50, 50);
                    ctx.stroke();
                    ctx.font = 'bold 30px Arial';
                    ctx.fillText(building.owner, building.x + 15, building.y + 35);
                });
            }
        }
    }, [gameData]);

    return <canvas ref={canvasRef} width={1200} height={600} />;
};

export default Game;