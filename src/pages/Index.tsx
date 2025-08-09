import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import PixelBackground from '@/components/PixelBackground';
import Navigation from '@/components/Navigation';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <PixelBackground />
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center space-y-16">
            
            {/* Hero Section */}
            <div className="space-y-8 animate-pixel-fade">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-pixel text-primary pixel-text-glow animate-float">
                  PIXELCRAFT<span className="text-accent">V2</span>
                </h1>
                <p className="text-lg md:text-xl font-pixel text-muted-foreground max-w-2xl mx-auto">
                  ENTER THE MODERN PIXEL-ART GAMING PLATFORM WITH CREATIVE & SURVIVAL MODES
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="hero"
                  onClick={() => navigate('/game')}
                  className="animate-float"
                >
                  🎮 START PLAYING
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/leaderboard')}
                  className="animate-float"
                  style={{ animationDelay: '0.2s' }}
                >
                  🏆 VIEW LEADERBOARD
                </Button>
              </div>
            </div>

            {/* Game Modes Preview */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-pixel-green hover:border-pixel-green/80 transition-colors group animate-float cursor-pointer"
                onClick={() => navigate('/game')}>
                <div className="space-y-4">
                  <div className="text-6xl group-hover:scale-110 transition-transform">🔨</div>
                  <h2 className="text-2xl font-pixel text-pixel-green">CREATIVE MODE</h2>
                  <p className="font-pixel text-sm text-muted-foreground">
                    BUILD WITHOUT LIMITS • UNLIMITED RESOURCES • SHARE CREATIONS
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary hover:border-primary/80 transition-colors group animate-float cursor-pointer"
                onClick={() => navigate('/game')}>
                <div className="space-y-4">
                  <div className="text-6xl group-hover:scale-110 transition-transform">⚔️</div>
                  <h2 className="text-2xl font-pixel text-primary">SURVIVAL MODE</h2>
                  <p className="font-pixel text-sm text-muted-foreground">
                    FIGHT TO SURVIVE • LIMITED RESOURCES • COMPETE FOR GLORY
                  </p>
                </div>
              </Card>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'PIXEL PERFECT', desc: 'CRISP GRAPHICS' },
                { icon: '🌐', title: 'MULTIPLAYER', desc: 'PLAY TOGETHER' },
                { icon: '💾', title: 'CLOUD SAVES', desc: 'NEVER LOSE PROGRESS' },
                { icon: '🎨', title: 'CUSTOMIZABLE', desc: 'MAKE IT YOURS' },
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card/60 backdrop-blur-sm border-2 border-border text-center animate-float hover:border-primary transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-pixel text-sm text-foreground mb-1">{feature.title}</h3>
                  <p className="font-pixel text-xs text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary">
              <div className="space-y-6">
                <h2 className="text-3xl font-pixel text-primary pixel-text-glow">
                  READY TO BEGIN?
                </h2>
                <p className="font-pixel text-muted-foreground">
                  JOIN THOUSANDS OF PLAYERS IN THE ULTIMATE PIXEL EXPERIENCE
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="pixel"
                    onClick={() => navigate('/login')}
                    className="animate-float"
                  >
                    👤 CREATE ACCOUNT
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/game')}
                    className="animate-float"
                    style={{ animationDelay: '0.2s' }}
                  >
                    🎮 PLAY AS GUEST
                  </Button>
                </div>
              </div>
            </Card>

            {/* Footer */}
            <div className="text-center space-y-4 py-8">
              <p className="font-pixel text-xs text-muted-foreground">
                MADE WITH ❤️ BY PIXELCRAFT STUDIOS
              </p>
              <div className="flex justify-center space-x-6">
                {['🐦', '📱', '💬', '📧'].map((icon, index) => (
                  <span 
                    key={index} 
                    className="text-2xl hover:scale-110 transition-transform cursor-pointer animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
