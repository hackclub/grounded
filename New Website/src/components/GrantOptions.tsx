
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GrantOptions = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-green-400 font-mono">
          &gt; Grant Options
        </h2>
        <p className="text-center text-green-300 mb-16 text-lg">
          Choose your path to hardware greatness
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hardware Grant */}
          <Card className="bg-black/50 border-green-900/50 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <CardTitle className="text-2xl text-green-400 font-mono">
                  Hardware Grant
                </CardTitle>
                <Badge className="bg-green-400/20 text-green-400 border-green-400/50">
                  Like Hack Club Bin
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-300">
                Get funding for components, tools, and materials to build your hardware project.
                Perfect for devboards, IoT devices, robotics, and more.
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-green-500">Funding:</span>
                  <span className="text-green-400 font-mono">Varies by project</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-500">Timeline:</span>
                  <span className="text-green-400 font-mono">1-2 weeks</span>
                </div>
              </div>

              <Button className="w-full bg-green-400/10 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                Apply for Hardware Grant
              </Button>
            </CardContent>
          </Card>

          {/* PCB Grant */}
          <Card className="bg-black/50 border-cyan-900/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <CardTitle className="text-2xl text-cyan-400 font-mono">
                  PCB Grant
                </CardTitle>
                <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50">
                  Custom PCBs
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-cyan-300">
                Fabricate your custom PCB design. Two tracks available based on your design tools and scale.
              </p>
              
              <div className="space-y-3">
                <div className="p-3 border border-green-900/50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 font-semibold">KiCad Track</span>
                    <span className="text-green-400 font-mono">$30 limit</span>
                  </div>
                  <p className="text-sm text-green-300">Perfect for learning and small projects</p>
                </div>
                
                <div className="p-3 border border-yellow-900/50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-yellow-400 font-semibold">EasyEDA + OSHWlabs</span>
                    <span className="text-yellow-400 font-mono">$5k USD limit</span>
                  </div>
                  <p className="text-sm text-yellow-300">For serious projects with open-source commitment</p>
                </div>
              </div>

              <Button className="w-full bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                Apply for PCB Grant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GrantOptions;
