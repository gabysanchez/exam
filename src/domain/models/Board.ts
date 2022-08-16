import { Cell } from './Cell';

export class Board {
  public cells: Cell[][] = [[]];
  constructor() {
    const generateRow = () => {
      for (let i = 0; i < 9; i++) {
        this.cells[i] = [];
        generateColumn(i);
      }
    };
    const generateColumn = (i: number) => {
      for (let j = 0; j < 9; j++) {
        this.cells[i][j] = new Cell(i, j, undefined);
      }
    };
    generateRow();
  }
}
