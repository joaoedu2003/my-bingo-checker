import { useState } from 'react';
import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const [isPeeling, setIsPeeling] = useState(false);

  const handleClick = () => {
    if (!square.isMarked) {
      setIsPeeling(true);
      setTimeout(() => setIsPeeling(false), 600); // Match animation duration
    }
    onClick();
  };

  const baseClasses = 'sticker flex items-center justify-center p-2 text-center select-none min-h-[60px] text-xs leading-tight font-sticker';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bingo'
      : 'marked'
    : '';

  const peelingClass = isPeeling ? 'peeling' : '';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm text-accent' : 'text-text-primary';

  return (
    <button
      onClick={handleClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${peelingClass} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-marked text-xs">★</span>
      )}
    </button>
  );
}
