import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Cpu, Github, MessageSquare, Sparkles, Layers, Heart, Rocket, Code, Wrench, Star, Trophy } from 'lucide-react';

const Index = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, []);

  useEffect(() => {
    // Create floating elements
    const elements = [];
    for (let i = 0; i < 12; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
        size: Math.random() * 20 + 10,
        icon: [Cpu, Zap, Code, Wrench, Star][Math.floor(Math.random() * 5)]
      });
    }
    setFloatingElements(elements);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Hardware Grants",
      description: "Get funding for components, tools, and materials to build your wildest hardware projects! 🔥",
      gradient: "from-green-400 to-green-500",
      emoji: "⚡"
    },
    {
      icon: Cpu,
      title: "PCB Manufacturing",
      description: "Custom PCB fabrication with up to $5k funding for serious open-source projects! 🚀",
      gradient: "from-blue-400 to-cyan-400",
      emoji: "🔧"
    },
    {
      icon: Heart,
      title: "Community Love",
      description: "Connect with awesome teen builders, get help, and collaborate on amazing projects! 💫",
      gradient: "from-green-300 to-green-400",
      emoji: "❤️"
    }
  ];

  const projects = [
    { title: "Hackducky Board", tags: ["Hacking", "USB", "SD Card", "RP2040", "BadUSB"], emoji: "🌈" },
  ];

  const stats = [
    { value: "1337+", label: "Teen Hackers", color: "text-green-400", emoji: "🧑‍💻" },
    { value: "$100K+", label: "Grants Awarded", color: "text-green-500", emoji: "💰" },
    { value: "9000+", label: "PCBs Made", color: "text-blue-400", emoji: "🔌" },
    { value: "50+", label: "Countries", color: "text-green-300", emoji: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => {
          const IconComponent = element.icon;
          return (
            <div
              key={element.id}
              className="absolute opacity-10 animate-pulse"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                animationDelay: `${element.delay}s`,
                fontSize: `${element.size}px`,
                animation: `float ${8 + element.id}s ease-in-out infinite ${element.delay}s`
              }}
            >
              <IconComponent className="w-8 h-8 text-green-400" />
            </div>
          );
        })}
      </div>

      {/* Mouse-following green aura effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-[32rem] h-[32rem] bg-gradient-radial from-green-400/60 via-green-500/30 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 256,
            top: mousePosition.y - 256,
            opacity: 0.7
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-radial from-green-500/40 via-green-400/20 to-transparent rounded-full blur-2xl transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
            opacity: 0.5
          }}
        />
      </div>

      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-green-500/20 via-green-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{
            left: '15%',
            top: '10%',
            opacity: 0.6 + glowIntensity * 0.004,
            animation: 'float 12s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{
            right: '15%',
            bottom: '20%',
            opacity: 0.4 + glowIntensity * 0.003,
            animation: 'float 15s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-green-300/20 via-green-400/10 to-transparent rounded-full blur-2xl animate-pulse"
          style={{
            left: '60%',
            top: '60%',
            opacity: 0.3 + glowIntensity * 0.002,
            animation: 'float 10s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 border-b border-green-700/30 backdrop-blur-sm">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 overflow-hidden">
              <img
                src="/hc-logo.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Grounded
              </div>
              <div className="text-sm text-gray-400 font-mono">By Hack Club</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-green-900/50 transition-all duration-300"
              onClick={() => window.location.href = "/guides"}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Guides
            </Button>

            <Button
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-900/50 hover:text-white transition-all duration-300"
              onClick={() => window.open("https://hackclub.com/slack/", "_blank")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Join Slack
            </Button>

            <Button
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://forms.hackclub.com/grounded", "_blank")}
            >
              Apply Now! 🚀
            </Button>
          </div>

        </nav>

        {/* Hero Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="text-6xl animate-bounce">🛠️</span>
              <span className="text-6xl animate-bounce" style={{ animationDelay: '0.1s' }}>⚡</span>
              <span className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🗑️</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-300 bg-clip-text text-transparent animate-pulse">
              Build Hardware That's
              <span className="block text-7xl md:text-9xl"> TOTALLY AWESOME! </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Turn your <span className="text-green-400 font-bold">wildest</span> hardware dreams into reality! 
              Get funding, community support, and manufacturing resources to build the 
              <span className="text-green-500 font-bold"> next generation</span> of electronics! 🎯
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Start Building! 
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-400 hover:bg-green-900/50 hover:text-white text-lg px-8 py-6 transition-all duration-300">
                <Github className="w-5 h-5 mr-2" />
                View Epic Projects
              </Button>
            </div>

            {/* Stats with emojis */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose a Pathway */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-900/30 to-green-900/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Choose Your Adventure! 🎮
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Pick the path that matches your project vibes
              </p>
              <div className="text-4xl">🛤️ → 🚀 → 🏆</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hardware Grant */}
              <Card className="bg-gray-900/70 border-green-700/50 hover:border-green-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 hover:ring-2 hover:ring-green-500/40">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Hardware Grant 🔥</h3>
                  <p className="text-gray-300 mb-6">Get funding for components, tools, and materials to build your hardware project! Perfect for devboards, IoT devices, and robotics that'll blow minds! 🤯</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center bg-green-900/30 p-3 rounded-lg">
                      <span className="text-green-400 font-semibold">💰 Funding:</span>
                      <span className="text-green-400 font-mono">Varies by awesomeness</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-800/30 p-3 rounded-lg">
                      <span className="text-green-500 font-semibold">⏰ Timeline:</span>
                      <span className="text-green-500 font-mono">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-900/20 p-3 rounded-lg">
                      <span className="text-green-300 font-semibold">🎮 Simulation:</span>
                      <span className="text-green-300 font-mono">Wokwi magic</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg py-3 shadow-lg hover:shadow-green-500/40 hover:bg-green-700/40 transition-all duration-300">
                    🚀 Apply for Hardware Grant
                  </Button>
                </CardContent>
              </Card>

              {/* PCB Grant */}
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">PCB Grant 🎯</h3>
                  <p className="text-gray-300 mb-6">Custom PCB fabrication with funding for serious open-source projects! Two epic tracks for different design tools. Time to make some circuit magic! ✨</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="p-4 border border-green-800/50 rounded-xl bg-green-900/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-400 font-bold">🟢 KiCad Track</span>
                        <span className="text-green-400 font-mono font-bold">$30 limit</span>
                      </div>
                      <p className="text-sm text-green-300">Perfect for learning & starter projects! 🌱</p>
                    </div>
                    
                    <div className="p-4 border border-blue-800/50 rounded-xl bg-blue-900/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-400 font-bold">🔥 EasyEDA + OSHWlabs</span>
                        <span className="text-blue-400 font-mono font-bold">$5K limit</span>
                      </div>
                      <p className="text-sm text-blue-300">For serious world-changing projects! 🌍</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    🎯 Apply for PCB Grant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sample Projects */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                What Teens Are Building! 🔥
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Get inspired by these absolutely incredible projects from our amazing community!
              </p>
              <div className="text-4xl">🤯 → 💡 → 🚀</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-900/70 border-gray-700 hover:border-green-500 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 hover:ring-2 hover:ring-green-500/40">
                  <CardContent className="p-6">
                    <div className="w-full h-36 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl mb-4 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                      <div className="text-center">
                        <div className="text-4xl mb-2 group-hover:animate-bounce">{project.emoji}</div>
                        <Cpu className="w-8 h-8 text-green-400 mx-auto" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-green-500/50 text-green-400 text-xs hover:bg-green-500/20 transition-colors duration-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-900/50 to-green-900/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-6xl mb-6">🚀✨🔥</div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teen builders who are turning their hardware dreams into reality! 
              Your epic journey starts right here, right now! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-xl px-12 py-8 shadow-xl hover:shadow-green-500/40 hover:bg-green-700/40 transition-all duration-300 transform hover:scale-105">
                <Trophy className="w-6 h-6 mr-2" />
                Apply for Grant! 🎯
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-400 hover:bg-green-900/50 hover:text-white text-xl px-12 py-8 transition-all duration-300">
                <Sparkles className="w-6 h-6 mr-2" />
                Learn More 📚
              </Button>
            </div>
            <div className="text-4xl animate-pulse">🎉 LET'S HACK THE WORLD! 🎉</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-700/30 py-12 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-xl">🔥</span>
            </div>
            <div className="text-lg font-bold text-green-400">HACK CLUB GROUNDED</div>
          </div>
          <p className="text-gray-500 mb-2">© 2025 Made with ❤️ by Aarav J</p>
          <p className="text-gray-600 text-sm">🚀 Hack the world! 🔧</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;