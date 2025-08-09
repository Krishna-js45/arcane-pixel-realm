import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PixelBackground from '@/components/PixelBackground';
import Navigation from '@/components/Navigation';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative">
      <PixelBackground />
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-4 animate-pixel-fade">
              <h1 className="text-4xl font-pixel text-primary pixel-text-glow">
                {isLogin ? 'LOGIN' : 'REGISTER'}
              </h1>
              <p className="text-sm font-pixel text-muted-foreground">
                {isLogin ? 'ENTER THE PIXEL REALM' : 'JOIN THE ADVENTURE'}
              </p>
            </div>

            {/* Form */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="font-pixel text-sm text-foreground">
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="ENTER_USERNAME"
                    className="font-pixel bg-secondary border-2 border-border focus:border-primary"
                    required
                  />
                </div>

                {/* Email (only for register) */}
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-pixel text-sm text-foreground">
                      EMAIL
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ENTER_EMAIL"
                      className="font-pixel bg-secondary border-2 border-border focus:border-primary"
                      required
                    />
                  </div>
                )}

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-pixel text-sm text-foreground">
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="ENTER_PASSWORD"
                    className="font-pixel bg-secondary border-2 border-border focus:border-primary"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="pixel"
                  className="w-full text-lg py-6"
                >
                  {isLogin ? '🎮 LOGIN' : '⭐ CREATE ACCOUNT'}
                </Button>

                {/* Toggle Form */}
                <div className="text-center space-y-4">
                  <p className="font-pixel text-xs text-muted-foreground">
                    {isLogin ? "DON'T HAVE AN ACCOUNT?" : 'ALREADY HAVE AN ACCOUNT?'}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsLogin(!isLogin)}
                    className="w-full"
                  >
                    {isLogin ? 'CREATE ACCOUNT' : 'LOGIN INSTEAD'}
                  </Button>
                </div>

                {/* Forgot Password */}
                {isLogin && (
                  <div className="text-center">
                    <Button
                      type="button"
                      variant="link"
                      className="font-pixel text-xs text-muted-foreground hover:text-primary"
                    >
                      FORGOT PASSWORD?
                    </Button>
                  </div>
                )}
              </form>
            </Card>

            {/* Guest Play */}
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-2 border-border text-center">
              <p className="font-pixel text-xs text-muted-foreground mb-4">
                OR PLAY AS GUEST
              </p>
              <Button variant="outline" className="w-full">
                👤 CONTINUE AS GUEST
              </Button>
            </Card>

            {/* Social Login */}
            <div className="space-y-4">
              <p className="font-pixel text-xs text-center text-muted-foreground">
                QUICK LOGIN WITH
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" className="font-pixel text-xs">
                  🌐 GOOGLE
                </Button>
                <Button variant="secondary" className="font-pixel text-xs">
                  🎮 DISCORD
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;