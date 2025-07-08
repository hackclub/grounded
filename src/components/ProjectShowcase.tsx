
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Hackducky Board",
      description: "Custom bad USB board with USB-C and an SD card slot built with an rp2040",
      tags: ["Hacking", "USB", "SD Card", "RP2040", "BadUSB"],
      gradient: "from-green-400 to-cyan-400"
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-green-400 font-mono">
          &gt; Sample Projects
        </h2>
        <p className="text-center text-green-300 mb-16 text-lg">
          Get inspired by what other teen hackers have built
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-black/50 border-green-900/50 hover:border-green-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-green-400/10">
              <CardContent className="p-6">
                <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="w-16 h-16 border-4 border-white/50 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/80 rounded" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-green-400 mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-green-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      className="bg-green-400/20 text-green-400 border-green-400/50 text-xs"
                    >
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
  );
};

export default ProjectShowcase;
