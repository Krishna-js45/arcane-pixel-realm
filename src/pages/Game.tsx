import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PixelBackground from '@/components/PixelBackground';
import Navigation from '@/components/Navigation';

const Game = () => {
  const [gameMode, setGameMode] = useState<'creative' | 'survival' | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = (mode: 'creative' | 'survival') => {
    setGameMode(mode);
    setIsPlaying(true);
  };

  if (isPlaying && gameMode) {
    return (
      <div className="min-h-screen relative">
        <PixelBackground />
        <Navigation />
        
        <div className="pt-20 px-4">
          <div className="container mx-auto">
            <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-2 border-primary">
              <div className="text-center space-y-6">
                <h1 className="text-3xl font-pixel text-primary pixel-text-glow mb-8">
                  {gameMode.toUpperCase()} MODE
                </h1>
                
                <div className="bg-pixel-surface border-2 border-pixel-grid p-8 min-h-[400px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl animate-float">🎮</div>
                    <p className="text-lg font-pixel text-muted-foreground">
                      GAME INTERFACE
                    </p>
                    <p className="text-sm font-pixel text-muted-foreground">
                      {gameMode === 'creative' 
                        ? 'BUILD & CREATE WITHOUT LIMITS' 
                        : 'SURVIVE THE PIXEL APOCALYPSE'
                      }
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {['⬆️', '⬇️', '⬅️', '➡️'].map((arrow, index) => (
                        <div
                          key={index}
                          className="bg-secondary border-2 border-border p-4 text-2xl text-center animate-float"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {arrow}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setIsPlaying(false);
                      setGameMode(null);
                    }}
                  >
                    ⬅️ BACK TO MENU
                  </Button>
                  <Button variant="destructive">
                    ⏸️ PAUSE
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <PixelBackground />
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4 animate-pixel-fade">
              <h1 className="text-4xl md:text-6xl font-pixel text-primary pixel-text-glow">
                SELECT GAME MODE
              </h1>
              <p className="text-lg font-pixel text-muted-foreground">
                CHOOSE YOUR PIXEL ADVENTURE
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Creative Mode */}
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-pixel-green hover:border-pixel-green/80 transition-colors group animate-float">
                <div className="text-center space-y-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform">
                    🔨
                  </div>
                  <h2 className="text-2xl font-pixel text-pixel-green">
                    CREATIVE MODE
                  </h2>
                  <p className="text-sm font-pixel text-muted-foreground">
                    BUILD WITHOUT LIMITS
                  </p>
                  <ul className="text-xs font-pixel text-muted-foreground space-y-2">
                    <li>• UNLIMITED RESOURCES</li>
                    <li>• FREE BUILD MODE</li>
                    <li>• NO ENEMIES</li>
                    <li>• SAVE & SHARE CREATIONS</li>
                  </ul>
                  <Button 
                    variant="game"
                    onClick={() => startGame('creative')}
                    className="w-full"
                  >
                    START CREATING
                  </Button>
                </div>
              </Card>

              {/* Survival Mode */}
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary hover:border-primary/80 transition-colors group animate-float">
                <div className="text-center space-y-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform">
                    ⚔️
                  </div>
                  <h2 className="text-2xl font-pixel text-primary">
                    SURVIVAL MODE
                  </h2>
                  <p className="text-sm font-pixel text-muted-foreground">
                    FIGHT TO SURVIVE
                  </p>
                  <ul className="text-xs font-pixel text-muted-foreground space-y-2">
                    <li>• LIMITED RESOURCES</li>
                    <li>• ENEMY ENCOUNTERS</li>
                    <li>• CRAFTING SYSTEM</li>
                    <li>• LEADERBOARD SCORING</li>
                  </ul>
                  <Button 
                    variant="pixel"
                    onClick={() => startGame('survival')}
                    className="w-full"
                  >
                    START SURVIVING
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xs font-pixel text-muted-foreground">
                USE WASD OR ARROW KEYS TO MOVE • MOUSE TO INTERACT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;