import { Board } from './Board';
import { Player } from './Player';

export enum GameStatus {
  InProgress,
  WonPlayer1,
  WonPlayer2,
}

export class Game {
  constructor(
    public board: Board,
    public status: GameStatus,
    public player1: Player,
    public player2: Player
  ) {}

  public start = () => {
    this.status = GameStatus.InProgress;
    this.initCell(0, 3, this.player1);
    this.initCell(6, 9, this.player2);
  };
  private initCell = (f: number, h: number, player: Player) => {
    for (let i = f; i < h; i++) {
      for (let j = 0; j < 9; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            this.board.cells[i][j].value = player;
          }
        } else {
          if (j % 2 !== 0) {
            this.board.cells[i][j].value = player;
          }
        }
      }
    }
  };
}
