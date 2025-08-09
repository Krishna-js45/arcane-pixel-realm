import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PixelBackground from '@/components/PixelBackground';
import Navigation from '@/components/Navigation';

const Leaderboard = () => {
  const [selectedMode, setSelectedMode] = useState<'creative' | 'survival'>('survival');

  const survivalScores = [
    { rank: 1, player: 'PIXEL_MASTER', score: 15420, level: 25 },
    { rank: 2, player: 'BYTE_WARRIOR', score: 12850, level: 22 },
    { rank: 3, player: 'RETRO_KING', score: 11200, level: 20 },
    { rank: 4, player: 'NEON_HUNTER', score: 9800, level: 18 },
    { rank: 5, player: 'CYBER_GHOST', score: 8650, level: 16 },
    { rank: 6, player: 'PIXEL_NINJA', score: 7420, level: 15 },
    { rank: 7, player: 'CODE_SLAYER', score: 6890, level: 14 },
    { rank: 8, player: 'GLITCH_LORD', score: 6100, level: 13 },
  ];

  const creativeBuilds = [
    { rank: 1, player: 'ARCHITECT_X', creation: 'MEGA CASTLE', likes: 2450 },
    { rank: 2, player: 'BLOCK_ARTIST', creation: 'PIXEL CITY', likes: 1820 },
    { rank: 3, player: 'DREAM_BUILDER', creation: 'SKY TEMPLE', likes: 1650 },
    { rank: 4, player: 'CRAFT_GENIUS', creation: 'NEON TOWER', likes: 1420 },
    { rank: 5, player: 'PIXEL_POET', creation: 'GARDEN MAZE', likes: 1180 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '🏅';
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-300';
      case 3: return 'text-orange-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen relative">
      <PixelBackground />
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-4 animate-pixel-fade">
              <h1 className="text-4xl md:text-6xl font-pixel text-primary pixel-text-glow">
                LEADERBOARD
              </h1>
              <p className="text-lg font-pixel text-muted-foreground">
                TOP PIXEL WARRIORS
              </p>
            </div>

            {/* Mode Selection */}
            <div className="flex justify-center space-x-4">
              <Button
                variant={selectedMode === 'survival' ? 'pixel' : 'outline'}
                onClick={() => setSelectedMode('survival')}
              >
                ⚔️ SURVIVAL
              </Button>
              <Button
                variant={selectedMode === 'creative' ? 'game' : 'outline'}
                onClick={() => setSelectedMode('creative')}
              >
                🔨 CREATIVE
              </Button>
            </div>

            {/* Leaderboard Content */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary">
              {selectedMode === 'survival' ? (
                <div className="space-y-4">
                  <h2 className="text-xl font-pixel text-primary text-center mb-6">
                    🏆 SURVIVAL CHAMPIONS
                  </h2>
                  
                  <div className="space-y-3">
                    {survivalScores.map((player, index) => (
                      <div
                        key={player.rank}
                        className={`flex items-center justify-between p-4 bg-secondary border-2 border-border hover:border-primary transition-colors animate-pixel-fade ${
                          player.rank <= 3 ? 'bg-secondary/50' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl">
                            {getRankIcon(player.rank)}
                          </span>
                          <div>
                            <p className={`font-pixel text-sm ${getRankColor(player.rank)}`}>
                              #{player.rank}
                            </p>
                            <p className="font-pixel text-foreground">
                              {player.player}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-pixel text-primary text-lg">
                            {player.score.toLocaleString()}
                          </p>
                          <p className="font-pixel text-muted-foreground text-xs">
                            LVL {player.level}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h2 className="text-xl font-pixel text-pixel-green text-center mb-6">
                    🏗️ CREATIVE MASTERS
                  </h2>
                  
                  <div className="space-y-3">
                    {creativeBuilds.map((builder, index) => (
                      <div
                        key={builder.rank}
                        className={`flex items-center justify-between p-4 bg-secondary border-2 border-border hover:border-pixel-green transition-colors animate-pixel-fade ${
                          builder.rank <= 3 ? 'bg-secondary/50' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl">
                            {getRankIcon(builder.rank)}
                          </span>
                          <div>
                            <p className={`font-pixel text-sm ${getRankColor(builder.rank)}`}>
                              #{builder.rank}
                            </p>
                            <p className="font-pixel text-foreground">
                              {builder.player}
                            </p>
                            <p className="font-pixel text-muted-foreground text-xs">
                              {builder.creation}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-pixel text-pixel-green text-lg">
                            ❤️ {builder.likes}
                          </p>
                          <p className="font-pixel text-muted-foreground text-xs">
                            LIKES
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center bg-card/60 border-2 border-border animate-float">
                <p className="font-pixel text-primary text-2xl">1,247</p>
                <p className="font-pixel text-xs text-muted-foreground">PLAYERS</p>
              </Card>
              <Card className="p-4 text-center bg-card/60 border-2 border-border animate-float">
                <p className="font-pixel text-pixel-green text-2xl">89</p>
                <p className="font-pixel text-xs text-muted-foreground">BUILDS</p>
              </Card>
              <Card className="p-4 text-center bg-card/60 border-2 border-border animate-float">
                <p className="font-pixel text-blood-red text-2xl">156K</p>
                <p className="font-pixel text-xs text-muted-foreground">BATTLES</p>
              </Card>
              <Card className="p-4 text-center bg-card/60 border-2 border-border animate-float">
                <p className="font-pixel text-accent text-2xl">24/7</p>
                <p className="font-pixel text-xs text-muted-foreground">ONLINE</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;