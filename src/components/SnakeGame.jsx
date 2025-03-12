import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { IconPauseIcon } from "./icons/Icons";
import { IconPlayArrowIcon } from "./icons/Icons";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CANVAS_SIZE = 300;
const SCALE = 20;
const SPEED = 300;
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (DIRECTIONS[event.key]) {
        updateDirection(event.key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  const updateDirection = (key) => {
    const newDirection = DIRECTIONS[key];
    if (
      newDirection &&
      (newDirection.x !== -direction.x || newDirection.y !== -direction.y)
    ) {
      setDirection(newDirection);
    }
  };

  useEffect(() => {
    if (gameOver || isPaused) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const newSnake = [...prev];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        if (
          head.x < 0 ||
          head.x >= CANVAS_SIZE / SCALE ||
          head.y < 0 ||
          head.y >= CANVAS_SIZE / SCALE ||
          newSnake.some(
            (segment) => segment.x === head.x && segment.y === head.y
          )
        ) {
          setGameOver(true);
          return prev;
        }

        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
            y: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
          });
          setScore((prev) => prev + 10);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, SPEED);
    return () => clearInterval(interval);
  }, [direction, food, gameOver, isPaused]);

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection(DIRECTIONS.ArrowRight);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Typography variant="h4" gutterBottom>
        Snake Game
      </Typography>
      <Typography variant="caption">Developed by Abdul Aziz</Typography>
      <Typography variant="h6">Score: {score}</Typography>
      <Typography color="error" height={10}>
        {gameOver && "Game Over! Press Restart to play again."}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: CANVAS_SIZE + 3,
          height: CANVAS_SIZE + 5,
          border: "4px solid gray",
          backgroundColor: "#f5f5f5",
          mt: 2,
        }}
      >
        {snake.map((segment, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: SCALE,
              height: SCALE,
              left: segment.x * SCALE,
              top: segment.y * SCALE,
              backgroundColor: "green",
            }}
          />
        ))}

        <Box
          sx={{
            position: "absolute",
            width: SCALE,
            height: SCALE,
            left: food.x * SCALE,
            top: food.y * SCALE,
            backgroundColor: "red",
          }}
        />
      </Box>

      {/* Control Buttons for Touch Users */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        mt={2}
      >
        <Button
          variant="contained"
          onClick={() => updateDirection("ArrowUp")}
          startIcon={<ArrowUpwardIcon />}
        />
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            onClick={() => updateDirection("ArrowLeft")}
            startIcon={<ArrowBackIcon />}
          />
          <Button
            variant="contained"
            onClick={() => updateDirection("ArrowRight")}
            startIcon={<ArrowForwardIcon />}
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => updateDirection("ArrowDown")}
          startIcon={<ArrowDownwardIcon />}
        />
      </Box>

      <Box display="flex" gap={2} mt={2}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<IconPlayArrowIcon />}
          onClick={restartGame}
        >
          Restart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<IconPauseIcon />}
          onClick={togglePause}
        >
          {isPaused ? "Resume" : "Pause"}
        </Button>
      </Box>
    </Box>
  );
}
