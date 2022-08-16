import { Container } from 'inversify';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { StartGameUseCase } from './application/startGame';
import { Board } from './domain/models/Board';
import { Game, GameStatus } from './domain/models/Game';
import { Player } from './domain/models/Player';

export const App = <>Hello world!</>;

export function runApp(container: Container) {
  const startGameUseCase = new StartGameUseCase();
  const board = new Board();
  const player1 = new Player('Player 1', '#FFFFFF');
  const player2 = new Player('Player 2', '#000000');
  const game = new Game(board, GameStatus.InProgress, player1, player2);
  game.start();

  console.log(game.board);

  ReactDOM.render(App, document.getElementById('root'));
}
