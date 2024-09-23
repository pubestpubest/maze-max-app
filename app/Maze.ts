export default class Maze {
  width: number;
  height: number;
  maze: number[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.maze = [];

    // Generate the maze
  }
  genMaze(): void {
    for (let i = 0; i < this.height; i++) {
      const row: number[] = [];
      for (let j = 0; j < this.width; j++) {
        row.push(Math.floor(Math.random() * 10));
      }
      this.maze.push(row);
    }
  }
  show(): void {
    console.log(this.maze); // Fixed 'maze' to 'this.maze'
  }

  toString(): string {
    let str = "";
    for (const row of this.maze) {
      str += "[";
      for (const num of row) {
        str += `\t${num}`;
      }
      str += "]\n";
    }
    return str;
  }

  maxScore(x: number, y: number): number {
    if (x >= this.width || y >= this.height || x < 0 || y < 0) return 0;
    if (x === 0 && y === 0) return this.maze[0][0];

    const scoreFromAbove = this.maxScore(x, y - 1);
    const scoreFromLeft = this.maxScore(x - 1, y);
    const thisScore = this.maze[y][x];

    return Math.max(scoreFromAbove, scoreFromLeft) + thisScore;
  }
}
