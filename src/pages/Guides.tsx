import { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, ArrowLeft, ChevronDown, Shield, Download, Upload, Wrench } from 'lucide-react';
import overview from './guides/overview.tsx';
import componentsOverview from './guides/components-overview.tsx';
import jlcOrdering from './guides/jlc-order-guide.tsx';
import wokwiGuide from './guides/wokwi-guide.tsx';
import { Link } from 'react-router-dom';
import OSHWLabStarsGuide from './guides/oshwlab-tutorial.tsx';
import pcbResources from './guides/pcb-resources.tsx';
import GroundplaneGuide from './guides/tracking-time.tsx';
import Parts from './guides/parts.tsx'
import groundedOverview from './guides/grounded-overview.tsx';


// Configuration for sidebar structure and file mappings
const guides = {
  'getting-started': {
    title: 'Guides!',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      { id: 'grounded-overview', title: 'Grounded Overview', icon: <BookOpen className="w-4 h-4" />, file: 'guides/components-overview.mdx', content: groundedOverview },
      { id: 'overview', title: 'PCBA Overview', icon: <BookOpen className="w-4 h-4" />, file: 'guides/overview.mdx', content: overview },
      { id: 'parts', title: 'Hardware Overview', icon: <BookOpen className="w-4 h-4" />, file: 'guides/wokwi-guide.mdx', content: Parts },
      { id: 'tracking-time', title: 'How to Track Time using Groundplane', icon: <Wrench className="w-4 h-4" />, file: 'guides/tracking-time.mdx', content: GroundplaneGuide },
      // { id: 'components-overview', title: 'Components Overview', icon: <Shield className="w-4 h-4" />, file: 'guides/components-overview.mdx', content: componentsOverview },
      { id: 'jlc-ordering', title: 'How to Order from JLCPCB', icon: <Upload className="w-4 h-4" />, file: 'guides/jlc-ordering.mdx', content: jlcOrdering },
      { id: 'oshwlab-tutorial', title: 'OSHWLab Stars Submission Guide', icon: <Upload className="w-4 h-4" />, file: 'guides/oshwlab-tutorial.mdx', content: OSHWLabStarsGuide },
      // { id: 'wokwi-guide', title: 'How to Use Wokwi', icon: <Download className="w-4 h-4" />, file: 'guides/wokwi-guide.mdx', content: wokwiGuide },
      { id: 'pcb-resources', title: 'PCB Resources', icon: <Download className="w-4 h-4" />, file: 'guides/pcb-resources.mdx', content: pcbResources },

    ]
  }
};

// MDX content storage
const mdxContent = {};
Object.values(guides).forEach(section => {
  section.items.forEach(item => {
    mdxContent[item.file] = item.content;
  });
});

// Simple MDX renderer component
const MDXRenderer = ({ content }) => {
  return <div>{content}</div>;
};

const TutorialSystem = () => {
  const [activeSection, setActiveSection] = useState('grounded-overview');
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'ordering': true,
    'design': false,
  });
  const [currentContent, setCurrentContent] = useState('');

  useEffect(() => {
    // Find the file for the active section
    let targetFile = null;
    Object.values(guides).forEach(section => {
      section.items.forEach(item => {
        if (item.id === activeSection) {
          targetFile = item.file;
        }
      });
    });

    if (targetFile && mdxContent[targetFile]) {
      setCurrentContent(mdxContent[targetFile]);
    } else {
      setCurrentContent('');
    }
  }, [activeSection]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700/50 shadow-2xl">
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
                {/* Icon container */}
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg relative">
                  <BookOpen className="w-5 h-5 text-white transition-opacity duration-150 group-hover:opacity-0" />
                  <ArrowLeft className="w-5 h-5 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                </div>

                {/* Text */}
                <div>
                  <h1 className="text-xl font-bold text-white">Grounded</h1>
                  <p className="text-sm text-slate-400">PCB Design Tutorials</p>
                </div>
              </Link>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {Object.entries(guides).map(([sectionKey, section]) => (
              <div key={sectionKey} className="space-y-1">
                <button
                  onClick={() => toggleSection(sectionKey)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-slate-400 group-hover:text-emerald-400 transition-colors">
                      {section.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {section.title}
                    </span>
                  </div>
                  {expandedSections[sectionKey] ?
                    <ChevronDown className="w-4 h-4 text-slate-400" /> :
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  }
                </button>

                {expandedSections[sectionKey] && section.items && (
                  <div className="ml-4 space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors text-left ${activeSection === item.id
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'hover:bg-slate-700/30 text-slate-400 hover:text-slate-300'
                          }`}
                      >
                        <div className="text-current opacity-70">
                          {item.icon}
                        </div>
                        <span className="text-sm">{item.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-8">
            <div className="prose prose-invert prose-emerald max-w-none">
              {currentContent ? (
                <MDXRenderer content={currentContent} />
              ) : (
                <div className="text-center py-12">
                  <div className="text-slate-400 mb-4">
                    <BookOpen className="w-12 h-12 mx-auto" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-300 mb-2">Select a Tutorial</h2>
                  <p className="text-slate-400">Choose a tutorial from the sidebar to get started with PCB design.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSystem;