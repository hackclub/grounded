import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const markdownGuides = {
  'guides': {
    title: 'Guides',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      {
        id: 'components-overview',
        title: 'Components Grant Overview',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/components-overview'
      },
      {
        id: 'grounded-overview',
        title: 'Grounded Overview',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/grounded-overview'
      },
      {
        id: 'hardware-grant',
        title: 'Hardware Grant',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/hardware-grant'
      },
      {
        id: 'jlc-ordering',
        title: 'How to Order from JLCPCB',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/jlc-ordering'
      },
      {
        id: 'kicad-submission',
        title: 'KiCad Submission',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/kicad-submission'
      },
      {
        id: 'oshwlab-tutorial',
        title: 'OSHWLab Tutorial',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/oshwlab-tutorial'
      },
      {
        id: 'pcb-resources',
        title: 'PCB Resources',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/pcb-resources'
      },
      {
        id: 'pcba-grant',
        title: 'PCB Assembly Grant',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/pcba-grant'
      },
      {
        id: 'groundplane',
        title: 'How to use Groundplane',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/groundplane'
      },
      {
        id: 'wokwi-guide',
        title: 'Wokwi Tutorial',
        icon: <BookOpen className="w-4 h-4" />,
        path: '/guides/wokwi-guide'
      },
    ]
  }
};

const getCurrentGuideId = (pathname) => {
  const cleanPath = pathname.replace(/\/$/, '');
  const parts = cleanPath.split('/');
  
  if (parts.length >= 3 && parts[1] === 'guides') {
    const guideId = parts[2];
    return guideId;
  }
  return null;
};

const GuideLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentGuideId, setCurrentGuideId] = useState(null);

  const [expandedSections, setExpandedSections] = useState({
    'guides': true,
  });

  useEffect(() => {
    const guideId = getCurrentGuideId(location.pathname);
    setCurrentGuideId(guideId);
  }, [location.pathname]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleNavigateToGuide = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex min-h-screen">
        <div className="w-80 bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/30 shadow-2xl fixed left-0 top-0 h-screen flex flex-col z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

          <div className="relative p-8 border-b border-slate-700/30 flex-shrink-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToHome}
                className="flex items-center space-x-4 group cursor-pointer transition-all duration-300"
              >
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-emerald-500/25 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <BookOpen className="w-6 h-6 text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 relative z-10" />
                  <ArrowLeft className="w-6 h-6 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10" />
                </div>

                <div className="transition-all duration-300">
                  <h1 className="text-2xl font-bold text-white group-hover:text-emerald-100 transition-colors duration-300">Grounded</h1>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">PCB Design Tutorials</p>
                </div>
              </button>
            </div>
          </div>

          <nav className="relative p-6 space-y-3 flex-1 overflow-y-auto">
            {Object.entries(markdownGuides).map(([sectionKey, section]) => (
              <div key={sectionKey} className="space-y-2">
                <button
                  onClick={() => toggleSection(sectionKey)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-lg hover:shadow-slate-900/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300 flex-shrink-0">
                      {section.icon}
                    </div>
                    <span className="text-base font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                      {section.title}
                    </span>
                  </div>
                  <div className="transform transition-transform duration-300 text-slate-400 group-hover:text-emerald-400 flex-shrink-0">
                    {expandedSections[sectionKey] ?
                      <ChevronDown className="w-5 h-5" /> :
                      <ChevronRight className="w-5 h-5" />
                    }
                  </div>
                </button>

                <div className={`ml-4 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${expandedSections[sectionKey] ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  {section.items && section.items.map((item, index) => {
                    const isActive = currentGuideId === item.id;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigateToGuide(item.path)}
                        className={`w-full flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 text-left group ${isActive
                          ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                          : 'hover:bg-slate-800/40 text-slate-400 hover:text-slate-200'
                          }`}
                        style={{
                          animationDelay: expandedSections[sectionKey] ? `${index * 50}ms` : '0ms'
                        }}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isActive
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-800/30 text-current opacity-70 group-hover:bg-slate-700/50 group-hover:opacity-100'
                          }`}>
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium flex-1 leading-relaxed pr-2">{item.title}</span>

                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex-1 overflow-auto ml-80">
          <div className="max-w-4xl mx-auto p-8 pr-8">
            <div className="prose prose-invert prose-emerald max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GuidesHomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToGuide = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Grounded</h1>
          <p className="text-xl text-slate-400 mb-8">PCB Design Tutorials</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {markdownGuides['guides'].items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigateToGuide(item.path)}
                className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-all duration-200 hover:scale-105 hover:shadow-xl group"
              >
                <div className="text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 mx-auto" })}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-100 transition-colors">
                  {item.title}
                </h3>
                <ChevronRight className="w-5 h-5 text-slate-400 mx-auto group-hover:text-emerald-400 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MarkdownGuidePage = ({ children }) => {
  return (
    <GuideLayout>
      {children}
    </GuideLayout>
  );
};

export { GuideLayout };

const Guides = () => {
  return <GuidesHomePage />;
};

export default Guides;