interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-bg-primary">
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-sticker text-text-primary mb-2 drop-shadow-lg">Bingo Mixer</h1>
        <p className="text-lg text-accent-light mb-8 drop-shadow">Find your people!</p>
        
        <div className="bg-bg-secondary/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/10 mb-8">
          <h2 className="font-sticker text-text-primary mb-3">How to play</h2>
          <ul className="text-left text-text-secondary text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a sticker when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-bg-primary font-sticker py-4 px-8 rounded-xl text-lg hover:bg-accent-light transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
