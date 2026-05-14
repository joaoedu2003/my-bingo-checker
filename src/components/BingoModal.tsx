interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-bg-secondary/90 backdrop-blur-md rounded-xl p-6 max-w-xs w-full text-center shadow-2xl border border-white/20 animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4 animate-bounce">🎉</div>
        <h2 className="text-3xl font-sticker text-bingo mb-2 drop-shadow-lg">BINGO!</h2>
        <p className="text-text-secondary mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent text-bg-primary font-sticker py-3 px-6 rounded-lg hover:bg-accent-light transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
