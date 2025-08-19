import React, { useState } from 'react';
import { BookOpen, ChevronRight, ArrowLeft, ChevronDown, Shield, Download, Upload, Wrench } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import GroundedPCBGrant from './guides/pcba-grant';
import GroundedOverview from './guides/grounded-overview';
import GroundplaneDocs from './guides/tracking-time';
import HowToOrderFromJLCPCB from './guides/jlc-order-guide';
import GroundedDesignResources from './guides/pcb-resources';
import OSHWLabStarsGuide from './guides/oshwlab-tutorial';
import GroundedHardwareGrant from './guides/hardware-grant';
import HardwareInventory from './guides/hardware-inventory';
import BattleBot from './guides/battlebot';



const guides = {
  'getting-started': {
    title: 'Guides',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      {
        id: 'grounded-overview',
        title: 'Overview',
        icon: <BookOpen className="w-4 h-4" />,
        component: GroundedOverview,
        path: '/guides/grounded-overview'
      },
      {
        id: 'hardware-grant',
        title: 'Hardware Grant',
        icon: <Download className="w-4 h-4" />,
        component: GroundedHardwareGrant,
        path: '/guides/hardware-grant'
      },
      {
        id: 'pcba-grant',
        title: 'PCBA Grant',
        icon: <Download className="w-4 h-4" />,
        component: GroundedPCBGrant,
        path: '/guides/pcba-grant'
      },
      {
        id: 'tracking-time',
        title: 'How to Track Time using Groundplane',
        icon: <Wrench className="w-4 h-4" />,
        component: GroundplaneDocs,
        path: '/guides/tracking-time'
      },
      {
        id: 'hardware-inventory',
        title: 'Hardware Inventory',
        icon: <BookOpen className="w-4 h-4" />,
        component: HardwareInventory,
        path: '/guides/hardware-inventory'
      },
      {
        id: 'jlc-ordering',
        title: 'How to Order from JLCPCB',
        icon: <Upload className="w-4 h-4" />,
        component: HowToOrderFromJLCPCB,
        path: '/guides/jlc-ordering'
      },
      {
        id: 'oshwlab-tutorial',
        title: 'OSHWLab Submission Guide',
        icon: <Upload className="w-4 h-4" />,
        component: OSHWLabStarsGuide,
        path: '/guides/oshwlab-tutorial'
      },
      {
        id: 'pcb-resources',
        title: 'PCB Resources',
        icon: <Download className="w-4 h-4" />,
        component: GroundedDesignResources,
        path: '/guides/pcb-resources'
      },
      {
        id: 'battlebot', 
        title: 'BattleBot Kit', 
        icon: <Upload className="w-4 h-4" />,
        component: BattleBot,
        path: '/guides/battlebot'
      }

    ]
  }
};

// Helper function to get current guide ID from path
const getCurrentGuideId = (pathname) => {
  const pathToId = {
    '/guides/grounded-overview': 'grounded-overview',
    '/guides/hardware-grant': 'hardware-grant',
    '/guides/pcba-grant': 'pcba-grant',
    '/guides/tracking-time': 'tracking-time',
    '/guides/jlc-ordering': 'jlc-ordering',
    '/guides/oshwlab-tutorial': 'oshwlab-tutorial',
    '/guides/pcb-resources': 'pcb-resources',
    '/guides/hardware-inventory': 'hardware-inventory',
    '/guides/battlebot': 'battlebot',

  };
  return pathToId[pathname] || null;
};


// Layout component for individual guide pages
const GuideLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentGuideId = getCurrentGuideId(location.pathname);

  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
  });

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
        {/* Fixed Sidebar */}
        <div className="w-80 bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/30 shadow-2xl fixed left-0 top-0 h-screen flex flex-col z-10">
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

          {/* Header */}
          <div className="relative p-8 border-b border-slate-700/30 flex-shrink-0">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToHome}
                className="flex items-center space-x-4 group cursor-pointer transition-all duration-300"
              >
                {/* Enhanced icon container */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-emerald-500/25 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <BookOpen className="w-6 h-6 text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 relative z-10" />
                  <ArrowLeft className="w-6 h-6 text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10" />
                </div>

                {/* Enhanced text */}
                <div className="transition-all duration-300">
                  <h1 className="text-2xl font-bold text-white group-hover:text-emerald-100 transition-colors duration-300">Grounded</h1>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">PCB Design Tutorials</p>
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="relative p-6 space-y-3 flex-1 overflow-y-auto">
            {Object.entries(guides).map(([sectionKey, section]) => (
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

                {/* Enhanced expandable section with smooth animation */}
                <div className={`ml-4 space-y-2 overflow-hidden transition-all duration-500 ease-in-out ${expandedSections[sectionKey] ? 'max-h-[40-rem] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  {section.items && section.items.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigateToGuide(item.path)}
                      className={`w-full flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 text-left group ${currentGuideId === item.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                        : 'hover:bg-slate-800/40 text-slate-400 hover:text-slate-200'
                        }`}
                      style={{
                        animationDelay: expandedSections[sectionKey] ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${currentGuideId === item.id
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-800/30 text-current opacity-70 group-hover:bg-slate-700/50 group-hover:opacity-100'
                        }`}>
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium flex-1 leading-relaxed pr-2">{item.title}</span>

                      {/* Active indicator */}
                      {currentGuideId === item.id && (
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Subtle bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto ml-80">
          <div
            className={`mx-auto p-8 pr-8 ${location.pathname === '/guides/hardware-inventory' ? '' : 'max-w-4xl'
              }`}
          >
            <div className="prose prose-invert prose-emerald max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual page components

export const OverviewPage = () => {
  return (
    <GuideLayout>
      <GroundedOverview />
    </GuideLayout>
  );
};


export const PCBGrantPage = () => {
  return (
    <GuideLayout>
      <GroundedPCBGrant />
    </GuideLayout>
  );
};

export const TrackingTimePage = () => {
  return (
    <GuideLayout>
      <GroundplaneDocs />
    </GuideLayout>
  );
};

export const JLCOrderingPage = () => {
  return (
    <GuideLayout>
      <HowToOrderFromJLCPCB />
    </GuideLayout>
  );
};

export const OSHWLabPage = () => {
  return (
    <GuideLayout>
      <OSHWLabStarsGuide />
    </GuideLayout>
  );
};

export const PCBResourcesPage = () => {
  return (
    <GuideLayout>
      <GroundedDesignResources />
    </GuideLayout>
  );
};

export const PartsPage = () => {
  return (
    <GuideLayout>
      <GroundedHardwareGrant />
    </GuideLayout>
  );
};

export const InventoryPage = () => {
  return (
    <GuideLayout>
      <HardwareInventory/>
    </GuideLayout>
  );
};

export const BattlebotPage = () => {
  return (
    <GuideLayout>
      <BattleBot/>
    </GuideLayout>
  )
}

// Main Guides page component (for /guides route)
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
            {guides['getting-started'].items.map((item) => (
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

// Default export for the main Guides route
const Guides = () => {
  return <GuidesHomePage />;
};

export default Guides;