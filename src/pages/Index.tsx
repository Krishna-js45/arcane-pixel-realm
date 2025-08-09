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
      
      <div className="pt-20 px-4 space-y-24">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center space-y-32">
            
            {/* Hero Section */}
            <div className="space-y-12 animate-pixel-fade">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-pixel text-primary pixel-text-glow animate-float">
                  PIXELCRAFT
                </h1>
                <p className="text-lg md:text-xl font-pixel text-muted-foreground max-w-2xl mx-auto animate-wave">
                  ENTER THE MODERN PIXEL-ART GAMING PLATFORM WITH CREATIVE & SURVIVAL MODES
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant="hero"
                  onClick={() => navigate('/game')}
                  className="animate-pulse-glow text-lg px-8 py-4"
                >
                  🎮 START PLAYING
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/leaderboard')}
                  className="animate-float text-lg px-8 py-4"
                  style={{ animationDelay: '0.2s' }}
                >
                  🏆 VIEW LEADERBOARD
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => navigate('/login')}
                  className="animate-float text-lg px-8 py-4"
                  style={{ animationDelay: '0.4s' }}
                >
                  👤 JOIN NOW
                </Button>
              </div>

              {/* Stats Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  { number: '10K+', label: 'ACTIVE PLAYERS', icon: '👥' },
                  { number: '50M+', label: 'BLOCKS PLACED', icon: '🧱' },
                  { number: '99.9%', label: 'UPTIME', icon: '⚡' }
                ].map((stat, index) => (
                  <Card 
                    key={index}
                    className="p-8 bg-card/60 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 animate-float group cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-3xl font-pixel text-primary mb-2">{stat.number}</div>
                    <div className="text-sm font-pixel text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Game Modes Preview */}
            <div className="space-y-12">
              <h2 className="text-4xl font-pixel text-foreground animate-wave">CHOOSE YOUR ADVENTURE</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-12 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-2 border-pixel-green hover:border-pixel-green/80 transition-all duration-500 group animate-float cursor-pointer hover:scale-105 hover:rotate-1"
                  onClick={() => navigate('/game')}>
                  <div className="space-y-6">
                    <div className="text-8xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">🔨</div>
                    <h3 className="text-3xl font-pixel text-pixel-green">CREATIVE MODE</h3>
                    <p className="font-pixel text-base text-muted-foreground leading-relaxed">
                      BUILD WITHOUT LIMITS • UNLIMITED RESOURCES • SHARE CREATIONS
                    </p>
                    <Button variant="outline" className="w-full animate-pulse-glow">
                      ENTER CREATIVE
                    </Button>
                  </div>
                </Card>

                <Card className="p-12 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-2 border-primary hover:border-primary/80 transition-all duration-500 group animate-float cursor-pointer hover:scale-105 hover:-rotate-1"
                  onClick={() => navigate('/game')}>
                  <div className="space-y-6">
                    <div className="text-8xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">⚔️</div>
                    <h3 className="text-3xl font-pixel text-primary">SURVIVAL MODE</h3>
                    <p className="font-pixel text-base text-muted-foreground leading-relaxed">
                      FIGHT TO SURVIVE • LIMITED RESOURCES • COMPETE FOR GLORY
                    </p>
                    <Button variant="outline" className="w-full animate-pulse-glow">
                      ENTER SURVIVAL
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-12">
              <h2 className="text-4xl font-pixel text-foreground animate-wave" style={{ animationDelay: '1s' }}>
                POWERED BY INNOVATION
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: '🎯', title: 'PIXEL PERFECT', desc: 'CRISP GRAPHICS', color: 'border-primary' },
                  { icon: '🌐', title: 'MULTIPLAYER', desc: 'PLAY TOGETHER', color: 'border-pixel-green' },
                  { icon: '💾', title: 'CLOUD SAVES', desc: 'NEVER LOSE PROGRESS', color: 'border-pixel-blue' },
                  { icon: '🎨', title: 'CUSTOMIZABLE', desc: 'MAKE IT YOURS', color: 'border-accent' },
                ].map((feature, index) => (
                  <Card 
                    key={index} 
                    className={`p-8 bg-card/60 backdrop-blur-sm border-2 ${feature.color} text-center animate-float hover:scale-110 hover:-rotate-2 transition-all duration-300 group cursor-pointer`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{feature.icon}</div>
                    <h3 className="font-pixel text-base text-foreground mb-2">{feature.title}</h3>
                    <p className="font-pixel text-xs text-muted-foreground">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Containers */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Community Section */}
              <Card className="p-12 bg-gradient-to-br from-pixel-green/20 to-pixel-green/5 backdrop-blur-sm border-2 border-pixel-green hover:border-pixel-green/80 transition-all duration-500 animate-float group">
                <div className="space-y-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform">🌟</div>
                  <h3 className="text-3xl font-pixel text-pixel-green">JOIN COMMUNITY</h3>
                  <p className="font-pixel text-muted-foreground">
                    CONNECT WITH BUILDERS • SHARE CREATIONS • GET INSPIRED
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 animate-pulse-glow">
                      💬 DISCORD
                    </Button>
                    <Button variant="outline" className="flex-1 animate-pulse-glow">
                      🐦 TWITTER
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Events Section */}
              <Card className="p-12 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-2 border-primary hover:border-primary/80 transition-all duration-500 animate-float group">
                <div className="space-y-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-3xl font-pixel text-primary">LIVE EVENTS</h3>
                  <p className="font-pixel text-muted-foreground">
                    WEEKLY CHALLENGES • BUILD COMPETITIONS • EPIC REWARDS
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 animate-pulse-glow">
                      📅 SCHEDULE
                    </Button>
                    <Button variant="outline" className="flex-1 animate-pulse-glow">
                      🎁 REWARDS
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="p-16 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-primary hover:border-primary/80 transition-all duration-500 animate-pulse-glow">
              <div className="space-y-8">
                <h2 className="text-5xl font-pixel text-primary pixel-text-glow animate-wave">
                  READY TO BEGIN?
                </h2>
                <p className="font-pixel text-xl text-muted-foreground max-w-2xl mx-auto">
                  JOIN THOUSANDS OF PLAYERS IN THE ULTIMATE PIXEL EXPERIENCE
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                  <Button 
                    variant="pixel"
                    onClick={() => navigate('/login')}
                    className="animate-float text-xl px-12 py-6 flex-1"
                  >
                    👤 CREATE ACCOUNT
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/game')}
                    className="animate-float text-xl px-12 py-6 flex-1"
                    style={{ animationDelay: '0.2s' }}
                  >
                    🎮 PLAY AS GUEST
                  </Button>
                </div>
                <div className="flex justify-center gap-4 pt-6">
                  <Button variant="ghost" size="sm" className="animate-float">📖 TUTORIAL</Button>
                  <Button variant="ghost" size="sm" className="animate-float">❓ FAQ</Button>
                  <Button variant="ghost" size="sm" className="animate-float">📧 SUPPORT</Button>
                </div>
              </div>
            </Card>

            {/* Footer */}
            <div className="text-center space-y-8 py-16">
              <p className="font-pixel text-base text-muted-foreground">
                MADE WITH ❤️ BY PIXELCRAFT STUDIOS
              </p>
              <div className="flex justify-center space-x-8">
                {[
                  { icon: '🐦', label: 'TWITTER' },
                  { icon: '📱', label: 'MOBILE' },
                  { icon: '💬', label: 'DISCORD' },
                  { icon: '📧', label: 'EMAIL' }
                ].map((social, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center space-y-2 group cursor-pointer"
                  >
                    <span 
                      className="text-4xl hover:scale-125 transition-all duration-300 animate-float group-hover:animate-pulse-glow"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {social.icon}
                    </span>
                    <span className="font-pixel text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </div>
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
