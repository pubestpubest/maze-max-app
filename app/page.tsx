"use client";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Container,
  Fieldset,
  Flex,
  TextInput,
} from "@mantine/core";
import Maze from "./Maze";

const myColor: string[] = [
  "#fff0e4",
  "#ffe0cf",
  "#fac0a1",
  "#f69e6e",
  "#f28043",
  "#f06d27",
  "#f06d27",
  "#d6530c",
  "#bf4906",
  "#a73c00",
];

const getColor = (value: number) => myColor[value % myColor.length];
const getFontColor = (value: number) => (value >= 4 ? "white" : "black");

export default function Home() {
  const [myMaze, setMyMaze] = useState(() => {
    const initialMaze = new Maze(5, 5);
    initialMaze.genMaze();
    return initialMaze;
  });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {}, [x, y]);

  const generateHandler = () => {
    const newMaze = new Maze(5, 5); // Create a new maze instance
    newMaze.genMaze(); // Generate a new maze
    setMyMaze(newMaze); // Update the state with the new maze
  };
  const buttonHandler = (x: number, y: number) => {
    setX(x);
    setY(y);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        height: "100vh", // Full viewport height
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          backgroundColor: "var(--mantine-color-yellow-light)",
        }}
      >
        <div>
          {myMaze.maze.map((row, index) => (
            <div key={index} style={{ display: "flex" }}>
              {row.map((value, vindex) => (
                <Button
                  onClick={() => buttonHandler(index, vindex)}
                  key={vindex}
                  m="5"
                  style={{
                    backgroundColor:
                      index == x && vindex == y ? "#cc5de8" : getColor(value),
                    color: getFontColor(value),
                    width: 50,
                    height: 50,
                  }}
                >
                  {value}
                </Button>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <Fieldset
            style={{
              width: 100,
              backgroundColor: "#ffe8cc",
            }}
          >
            <TextInput
              label="X"
              value={x}
              onChange={(event) => setX(Number(event.target.value))}
              type="number"
            ></TextInput>
            <TextInput
              label="Y"
              value={y}
              onChange={(event) => setY(Number(event.target.value))}
              type="number"
            ></TextInput>
          </Fieldset>
          <div
            style={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <Button onClick={generateHandler}>Generate new maze</Button>
            <Alert
              variant="light"
              color="orange"
              title={`Max Score ${myMaze.maxScore(x, y)}`}
              style={{ height: 35 }}
              pt={5}
            ></Alert>
          </div>
        </div>
      </div>
    </div>
  );
}
