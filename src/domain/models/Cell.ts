import { Player } from './Player';

export class Cell {
  constructor(
    public x: number,
    public y: number,
    public value: Player | undefined
  ) {}
}
