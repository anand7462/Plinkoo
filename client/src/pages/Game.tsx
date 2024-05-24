import React, { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager";
import axios from "axios";
import { Button } from "../components/ui";
import { baseURL } from "../utils";

export function Game() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const bm = new BallManager(canvasRef.current as unknown as HTMLCanvasElement);
      setBallManager(bm);
    }
  }, [canvasRef]);

  const addBallHandler = async () => {
    const response = await axios.post(`${baseURL}/game`, {
      data: 1,
    });
    if (ballManager) {
      ballManager.addBall(response.data.point);
      const newMultiplier = response.data.multiplier;
      // Update the multipliers array to keep only the last 4
      setMultipliers((prevMultipliers) => {
        const updatedMultipliers = [...prevMultipliers, newMultiplier].slice(-4);
        return updatedMultipliers;
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <Button className="px-10 mb-4" onClick={addBallHandler}>
        Add ball
      </Button>
      <div className="px-10 mb-10">
        <ul>
          {multipliers.map((multiplier, index) => (
            <li key={index}>{multiplier}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
