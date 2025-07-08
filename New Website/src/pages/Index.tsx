import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Cpu, Github, MessageSquare, Sparkles, Layers, Heart, Rocket, Code, Wrench, Star, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCarousel from "@/components/ProjectCarousel"
import YoutubeVideo from '@/components/youtube-video';

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
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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


  const stats = [
    { value: "5000+", label: "Teen Hackers", color: "text-green-400", emoji: "" },
    { value: "$100K+", label: "Grants Awarded", color: "text-green-500", emoji: "" },
    { value: "1200+", label: "PCBs Made", color: "text-blue-400", emoji: "" },
    { value: "50+", label: "Countries", color: "text-green-300", emoji: "" }
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

      <a
        className="hidden md:block w-[20vw] absolute animate-float z-[9999] top-64 left-7"
        href="https://jams.hackclub.com/batch/sparkletilt-pcb"
        target="_blank"
      >
        <img
          src="https://cloud-myjum5y6g-hack-club-bot.vercel.app/0longhorn2.png"
          alt="Floating module"
        />
      </a>

       <a
        className="hidden md:block w-[20vw] absolute animate-float z-[9999] top-[650px] left-20"
        target="_blank"
      >
        <img
          src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/ae8f46ee7f073299633edd7b0d4ad17281649096_image-6-removebg-preview.png"
          alt="Floating module"
        />
      </a>

      <a
        className="w-[15vw] absolute animate-float z-[9999] top-64 right-7 hidden md:block"
        href="https://github.com/hackclub/OnBoard/tree/main/projects/TOTKey"
        target="_blank"
      >
        <img
          src="https://cloud-6a1wip38p-hack-club-bot.vercel.app/1totk_key.png"
          alt="Floating module"
        />
      </a>

      <a
        className="w-[15vw] absolute animate-float z-[9999] top-[700px] right-20 hidden md:block"
        href="https://jams.hackclub.com/batch/usb-hub"
        target="_blank"
      >
        <img
          src="https://cloud-c953eezuq-hack-club-bot.vercel.app/0hub.png"
          alt="Floating module"
        />
      </a>


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

        <a href="https://hackclub.com/">
          <img
            src="https://assets.hackclub.com/flag-orpheus-top.svg"
            alt="Hack Club"
            className="absolute top-0 left-[300px] border-0 w-[175px] z-[999]"
          />
        </a>

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
              Apply Now
            </Button>
          </div>

        </nav>

        {/* Hero Section */}
        <section className="py-20 px-6 text-center">

          <div className="mb-8 relative group h-64 pointer-events-none">
            <img
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8817be7a0c3611dd75cb36b77c7757d8d03da8ee_group_3.svg"
              alt="Grounded"
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out"
              style={{ willChange: 'opacity' }}
            />
          </div>
          <div className="max-w-6xl mx-auto">

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-300 bg-clip-text text-transparent animate-pulse">
              Circuit boards are magical
              <span className="block text-5xl md:text-7xl"> If you make one, we will buy it!</span>
            </h1>


            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-16">
              <Link to="/guides">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="https://github.com/hackclub/OnBoard/tree/main/projects">
                <Button size="lg" variant="outline" className="border-green-600 text-green-400 hover:bg-green-900/50 hover:text-white text-lg px-8 py-6 transition-all duration-300">
                  <Github className="w-5 h-5 mr-2" />
                  View Past Projects
                </Button>
              </Link>
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
                Choose Your Path
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* PCB Grant */}
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">PCB Grant</h3>
                  <p className="text-gray-300 mb-6">Custom PCB fabrication with funding for serious open-source projects! Two epic tracks for different design tools. Time to make some circuit magic! ✨</p>

                  <div className="space-y-4 mb-8">
                    <div className="p-4 border border-green-800/50 rounded-xl bg-green-900/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-400 font-bold">🟢 KiCad Track</span>
                        <span className="text-green-400 font-mono font-bold">$30 limit</span>
                      </div>
                      <p className="text-sm text-green-300">Perfect for learning & starter projects</p>
                    </div>

                    <div className="p-4 border border-blue-800/50 rounded-xl bg-blue-900/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-400 font-bold">🔥 EasyEDA + OSHWlabs</span>
                        <span className="text-blue-400 font-mono font-bold">$1K limit</span>
                      </div>
                      <p className="text-sm text-blue-300">For larger, serious projects</p>
                    </div>
                    <div className="p-4 border border-yellow-800/50 rounded-xl bg-yellow-900/20">
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 font-bold">Unlimited Unique Submissions!</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/guides">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                      Get started with a PCB grant
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <div className="relative">
                {/* Grayed out overlay */}
                <Card className="bg-gray-900/70 border-green-700/50 transition-all duration-300 group scale-100 shadow-none filter grayscale opacity-70 pointer-events-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-3xl">🗑️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Hardware Grant</h3>
                    <p className="text-gray-300 mb-6">
                      Get components, tools, and materials to build your hardware project! Perfect for devboards, IoT devices, and robotics
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between items-center bg-green-900/30 p-3 rounded-lg">
                        <span className="text-green-400 font-semibold">Funding:</span>
                        <span className="text-green-400 font-mono">Varies by awesomeness</span>
                      </div>
                      <div className="flex justify-between items-center bg-green-800/30 p-3 rounded-lg">
                        <span className="text-green-500 font-semibold">Timeline:</span>
                        <span className="text-green-500 font-mono">1-2 weeks</span>
                      </div>
                      <div className="flex justify-between items-center bg-green-900/20 p-3 rounded-lg">
                        <span className="text-green-300 font-semibold">Submission:</span>
                        <span className="text-green-300 font-mono">Wokwi and CAD</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg py-3 shadow-lg cursor-not-allowed opacity-50">
                      Apply for Hardware Grant
                    </Button>
                  </CardContent>
                </Card>

                {/* Banner */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-bold uppercase px-4 py-1 rounded shadow-lg select-none pointer-events-none z-20 text-sm sm:text-base">
                  Coming soon after 50 PCBs are made
                </div>
              </div>



            </div>
          </div>
        </section>

        {/* Sample Projects */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              What are people already making?
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Get inspired by these absolutely incredible projects from our amazing community!
            </p>
          </div>

          {/* Full-width ProjectCarousel without constraints */}
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <ProjectCarousel />
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-900/50 to-green-900/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Never made a circuit board before? No problem.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teenagers who are learning as well. Check out our written and video tutorials. Ask questions in #electronics on Slack
            </p>
            <div className='w-full flex justify-center'>

              <YoutubeVideo
                youtube-id="LrSKs35nR8k"
                list="PLbNbddgD-XxECO7C2z-FAlSoJ57VqcJA3"
                height="600px"
                width="1200px"
              />
            </div>

            <p className='p-5'>
              See the{' '}
              <Link
                to="https://www.youtube.com/watch?v=LrSKs35nR8k&list=PLbNbddgD-XxECO7C2z-FAlSoJ57VqcJA3"
                className="text-blue-500 underline hover:text-blue-400 transition-colors duration-200"
                target="_blank" // optional: opens in new tab
                rel="noopener noreferrer" // optional: for security when using target="_blank"
              >
                full playlist
              </Link>
              . and ask questions on the Hack Club Slack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="https://hackclub.slack.com/">
                <Button size="lg" variant="outline" className="border-green-600 text-green-400 hover:bg-green-900/50 hover:text-white text-xl px-12 py-8 transition-all duration-300">
                  <Sparkles className="w-6 h-6 mr-2" />
                  Join the Slack
                </Button>
              </Link>


            </div>
            <div className="text-4xl animate-pulse">LET'S HACK THE WORLD!</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-700/30 py-12 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <img
                src="/hc-logo.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="text-lg font-bold text-green-400">HACK CLUB GROUNDED</div>
          </div>
          <p className="text-gray-500 mb-2">© 2025 Made with ❤️ by Aarav J</p>
          <p className="text-gray-600 text-sm">Hack the world!</p>
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