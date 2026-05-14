import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-bg-primary">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-bg-secondary/80 backdrop-blur-sm border-b border-white/10">
        <button
          onClick={onReset}
          className="text-text-secondary text-sm px-3 py-1.5 rounded bg-accent/20 hover:bg-accent/30 transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-sticker text-text-primary text-xl">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-text-secondary text-sm py-2 px-4">
        Tap a sticker when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo/20 text-bingo text-center py-2 font-sticker text-sm border border-bingo/30 animate-pulse">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
