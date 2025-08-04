import { useState, useEffect } from 'react';
import { Heading, Text, Theme, ThemeUIProvider } from 'theme-ui'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Cpu, Code, Wrench, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCarousel from "@/components/ProjectCarousel"
import YoutubeVideo from '@/components/youtube-video';
import Icon from '@hackclub/icons'
import Footer from '@/components/footer';
import theme from '@hackclub/theme';
import Balancer from 'react-wrap-balancer'
import Sparkles from '@/components/Sparkles';

/**
 * @type {import('theme-ui').ThemeUIStyleObject}
 */

const Index = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    // Ensure the page starts at the top on load (chromeissue?)
    window.scrollTo(0, 0);
  }, []);


  const stats = [
    { value: "5000+", label: "Teen Hackers", color: "text-green-400", emoji: "" },
    { value: "$100K+", label: "Grants Awarded", color: "text-green-500", emoji: "" },
    { value: "1200+", label: "PCBs Made", color: "text-blue-400", emoji: "" },
    { value: "50+", label: "Countries", color: "text-green-300", emoji: "" }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

				@font-face {
					font-family: 'Phantom Sans';
					src: url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Med.woff')
							format('woff'),
						url('https://assets.hackclub.com/fonts/Phantom_Sans_0.7/Med.woff2')
							format('woff2');
					font-weight: 500;
					font-style: normal;
					font-display: swap;
				}

				html {
					scroll-behavior: smooth;
          font-family: 'Phantom Sans', sans-serif;
				}
        
        .press-start {
          font-family: "Press Start 2P", system-ui;
          font-weight: 400;
          font-style: normal;
        }
			`}</style>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <a
          className="hidden md:block w-[20vw] absolute animate-float z-[9999] top-64 left-7"
          href="https://jams.hackclub.com/batch/sparkletilt-pcb"
          target="_blank"
        >
          <img
            src="https://cloud-myjum5y6g-hack-club-bot.vercel.app/0longhorn2.png"
            alt="Floating module: sparkletilt digital level"
            className="hidden md:block"
          />
        </a>

        <a
          className="hidden md:block w-[20vw] absolute animate-float z-[9999] top-[650px] left-20"
          href="https://github.com/souptik-samanta/Infrared-gun"
          target="_blank"
          style={{ animationDelay: '-2s' }}
        >
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/ae8f46ee7f073299633edd7b0d4ad17281649096_image-6-removebg-preview.png"
            alt="Floating module - a non contact temperature meter" />
        </a>

        <a
          className="w-[15vw] absolute animate-float z-[9999] top-64 right-7 hidden md:block"
          href="https://github.com/hackclub/OnBoard/tree/main/projects/TOTKey"
          target="_blank"
          style={{ animationDelay: '-4s' }}
        >
          <img
            src="https://cloud-6a1wip38p-hack-club-bot.vercel.app/1totk_key.png"
            alt="Floating module - a hardware key" />
        </a>

        <a
          className="w-[15vw] absolute animate-float z-[9999] top-[700px] right-20 hidden md:block"
          href="https://jams.hackclub.com/batch/usb-hub"
          target="_blank"
          style={{ animationDelay: '-6s' }}
        >
          <img
            src="https://cloud-c953eezuq-hack-club-bot.vercel.app/0hub.png"
            alt="Floating module - a USB hub" />
        </a>

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <a href="https://hackclub.com/" className='hidden sm:block'>
                <img
                  src="https://assets.hackclub.com/flag-orpheus-top.svg"
                  alt="Hack Club orpheus flag"
                  style={{
                    top: '-8px',
                    zIndex: "999",
                    marginBottom: '5px',
                    position: 'absolute',
                    width: '200px',
                    filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))'
                  }} />
              </a>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-green-900/50 transition-all duration-300"
                onClick={() => window.location.href = "/guides"}
              >
                {/* <Sparkles className="w-4 h-4 mr-2" /> */}
                Guides
              </Button>

              <Button
                variant="outline"
                className="border-green-600 text-black hover:bg-green-900/50 hover:text-white transition-all duration-300"
                onClick={() => window.open("https://hackclub.com/slack/", "_blank")}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  Join Slack
                  <Icon glyph='slack' size={24} style={{ width: 24, height: 24, marginLeft: 8, marginRight: 0 }} />
                </span>
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
          <section className="min-h-[calc(100vh-88px)] flex flex-col justify-center py-0 px-6 text-center">
            <h1
              className="press-start"
              style={{
                fontWeight: 700,
                color: '#87ffa1',
                marginBottom: '2rem',
                textAlign: 'center',
                textShadow: '0 0 40px rgba(42, 252, 88, 0.7)',
                fontSize: 'clamp(2.5rem, 10vw, 6em)',
                lineHeight: 1.1,
                wordBreak: 'break-word'
              }}
            >
              Grounded
            </h1>
            <div className="max-w-6xl mx-auto">
              <Heading
                as="div"
                sx={{ fontSize: 4, fontWeight: 400, maxWidth: 'copyPlus' }}
              >
                <Balancer ratio={0.3}>
                  Circuit boards are{' '}
                  <Sparkles>
                    <Text sx={{ fontWeight: 400 }}>magical{'.'}</Text>
                  </Sparkles>{' '}
                  You design one, we'll pay for printing it!
                </Balancer>
              </Heading>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-16">
                <Link to="/guides">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started!
                    <ArrowRight className="w-5 h-5 ml-0" />
                  </Button>
                </Link>
                <Link to="https://github.com/hackclub/OnBoard/tree/main/projects">
                  <Button size="lg" variant="outline" className="border-green-600 text-black hover:bg-green-900/50 hover:text-white text-lg px-6 py-6 transition-all duration-300">
                    View Past Projects
                    <Icon glyph='github' size={24} style={{ width: 24, height: 24, marginRight: 4 }} />

                  </Button>
                </Link>
              </div>

              {/* Stats with emojis */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
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
                    {/* Sponsor Image */}
                    <img
                      src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4737201a9a360dcc0bd5e848a63f2fba3defdeba_image.png"
                      alt="Sponsor"
                      className="w-28 h-auto mx-auto mb-4"
                    />



                    <h3 className="text-2xl font-bold text-white mb-4">PCB Grant</h3>
                    <p className="text-gray-300 mb-6">Custom PCB fabrication with funding for serious open-source projects!</p>

                    <div className="space-y-4 mb-8">
                      <div className="p-4 border border-green-800/50 rounded-xl bg-green-900/20">
                        <div className="flex justify-between items-center">
                          <span className="text-green-400 font-bold">Tier 3 grant (3-8 hours of work)</span>
                          <span className="text-green-400 font-mono font-bold">$20 limit</span>
                        </div>
                      </div>

                      <div className="p-4 border border-blue-800/50 rounded-xl bg-blue-900/20">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-400 font-bold">Tier 2 grant (8-25 hours of work)</span>
                          <span className="text-blue-400 font-mono font-bold">$50 limit</span>
                        </div>
                      </div>

                      <div className="p-4 border border-amber-700/50 rounded-xl bg-rose-100/10">
                        <div className="flex justify-between items-center">
                          <span className="text-amber-600 font-bold">Tier 1 grant (25+ hours of work)</span>
                          <span className="text-rose-500 font-mono font-bold">$150 limit</span>
                        </div>
                      </div>

                      <div className="p-4 border border-yellow-800/50 rounded-xl bg-yellow-900/20">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-600 font-bold">OSHWLabs Level Project</span>
                          <span className="text-yellow-500 font-mono font-bold">$5000 from OSWHLabs + $150</span>
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

                <Card className="bg-gray-900/70 border-green-700/50 hover:border-green-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-3xl" style={{ fontFamily: 'emoji' }}>🔧</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Hardware Grant</h3>
                    <p className="text-gray-300 mb-6">
                      Get components, tools, and materials to build your hardware project! Perfect for devboards, IoT devices, and robotics
                    </p>

                    <div className="space-y-3 mb-8">
                        <div className="flex justify-between items-center bg-green-900/30 p-3 rounded-lg">
                          <span className="text-green-400 font-semibold">Funding:</span>
                          <span className="text-green-400 font-mono">Up to $50 total</span>
                        </div>
                        <div className="flex justify-between items-center bg-green-800/30 p-3 rounded-lg">
                          <span className="text-green-500 font-semibold">Breakdown:</span>
                          <span className="text-green-500 font-mono">$30 PCB + $20 parts</span>
                        </div>
                        <div className="flex justify-between items-center bg-green-900/20 p-3 rounded-lg">
                          <span className="text-green-300 font-semibold">Includes:</span>
                          <span className="text-green-300 font-mono">Parts from bin</span>
                        </div>
                      </div>

                    <Link to="/guides">
                      <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg py-3 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                        Apply for Hardware Grant
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
                Get inspired by these absolutely incredible projects from our community!
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
                Never made a circuit board before? No problem!
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of teenagers who are learning as well. Check out our written and video tutorials. Ask questions in the #electronics channel on Slack
              </p>
              <div className='w-full flex justify-center rounded-2xl overflow-hidden'>
                <YoutubeVideo
                  youtube-id="LrSKs35nR8k"
                  list="PLbNbddgD-XxECO7C2z-FAlSoJ57VqcJA3"
                  height="600px"
                  width="1200px"
                />
              </div>

              <p className='p-5'>
                (See the{' '}
                <Link
                  to="https://www.youtube.com/watch?v=LrSKs35nR8k&list=PLbNbddgD-XxECO7C2z-FAlSoJ57VqcJA3"
                  className="text-blue-500 underline hover:text-blue-400 transition-colors duration-200"
                  target="_blank" // optional: opens in new tab
                  rel="noopener noreferrer" // optional: for security when using target="_blank"
                >
                  full playlist
                </Link>
                . and ask questions on the Hack Club Slack)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 pt-20">
                <Link to="https://hackclub.com/slack/" target="_blank">
                  <Button size="lg" variant="outline" className="border-green-600 text-black hover:bg-green-900/50 hover:text-white text-xl px-8 py-8 transition-all duration-300">
                    {/* <Sparkles className="w-6 h-6 mr-2" /> */}
                    Join the Slack
                    <Icon glyph='slack' size={24} style={{ width: 24, height: 24, marginLeft: 8 }} />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className='p-12 pl-12 pr-12'>
            <h1 className="text-2xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">How many grants can I get</h3>
                <p className="text-gray-300 mt-2">You can grants for as many projects as you like. The only requirement is that each project must be unique</p>
              </Card>

              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">Can I submit my Highway or other YSWS project here (including Summer of Making)?</h3>
                <p className="text-gray-300 mt-2">You cannot submit Grounded projects to anything other than Summer of Making. That means, you are not allowed to submit this to Highway, Silicon, Reality, etc.</p>
              </Card>
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">How are the grants awarded?</h3>
                <p className="text-gray-300 mt-2">Grants are typically givin in the form of a Hack Club Bank card along with various coupons depending on the orders</p>
              </Card>
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">When will the components grant start?</h3>
                <p className="text-gray-300 mt-2">Once 50 unique PCB's are designed, we will launch a components grant giving away</p>
              </Card>
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">How can I get the full 5000?</h3>
                <p className="text-gray-300 mt-2">In order to get the full 5000, you need to qualify for the OSHWLab stars prohgram. Hack Club will pay for your shipping on top.</p>
              </Card>
              <Card className="bg-gray-900/70 border-blue-700/50 hover:border-blue-500 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">When does this program end?</h3>
                <p className="text-gray-300 mt-2">The current end date for the grant program is for August 31 however this may be subject to changes.</p>
              </Card>
            </div>

            <div className="flex flex-col items-center py-4">
              <p className="text-white text-lg font-semibold mb-4">Coupons for PCB's were donated by:</p>
              <div className="flex justify-center items-center gap-8">
                <img
                  src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4737201a9a360dcc0bd5e848a63f2fba3defdeba_image.png"
                  alt="Sponsor"
                  className="w-28 h-auto mx-auto mb-4"
                />
              </div>
            </div>

          </section>
          {/* Footer */}
          <Footer dark></Footer>
        </div>

        <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-25px) rotate(5deg) scale(1.02);
            opacity: 1;
          }
          50% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          75% {
            transform: translateY(25px) rotate(-5deg) scale(0.98);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
      </div></>
  );
};




const IndexPage = () => {
  return (
    <ThemeUIProvider theme={theme as Theme}>
      <Index />
    </ThemeUIProvider>
  );
}

export default IndexPage;