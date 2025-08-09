import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME', icon: '🏠' },
    { path: '/game', label: 'GAME', icon: '🎮' },
    { path: '/leaderboard', label: 'LEADERBOARD', icon: '🏆' },
    { path: '/login', label: 'LOGIN', icon: '👤' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b-2 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer animate-float"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-primary pixel-glow"></div>
            <h1 className="text-xl font-pixel text-primary pixel-text-glow">
              PIXELCRAFT<span className="text-accent">V2</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "pixel" : "outline"}
                onClick={() => navigate(item.path)}
                className="text-xs"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-lg">{isOpen ? '✕' : '☰'}</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-pixel-fade">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "pixel" : "outline"}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className="w-full text-xs justify-start"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;