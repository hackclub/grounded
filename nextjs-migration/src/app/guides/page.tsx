"use client";

import React from "react";
import { Book, Clock, Cpu, ShoppingCart, FileText, Globe, Zap, Wrench } from "lucide-react";

import TrackingTimeGuide from "./content/tracking-time";
import ComponentsOverviewGuide from "./content/components-overview";
import JLCOrderGuide from "./content/jlc-order-guide";
import KiCadSubmissionGuide from "./content/kicad-submission";
import OSHWLabTutorialGuide from "./content/oshwlab-tutorial";
import OverviewGuide from "./content/overview";
import PCBResourcesGuide from "./content/pcb-resources";
import WokwiGuide from "./content/wokwi-guide";

export default function GuidesPage() {
  const [currentPath, setCurrentPath] = React.useState('');
  const [activeGuide, setActiveGuide] = React.useState('overview');
  const [isInitialized, setIsInitialized] = React.useState(false);

  const guides = [
    { id: 'overview', title: 'Overview', icon: Book, path: '/guides/overview', component: OverviewGuide },
    { id: 'tracking-time', title: 'Tracking Time', icon: Clock, path: '/guides/tracking-time', component: TrackingTimeGuide },
    { id: 'components-overview', title: 'Components Overview', icon: Cpu, path: '/guides/components-overview', component: ComponentsOverviewGuide },
    { id: 'jlc-order-guide', title: 'JLC Order Guide', icon: ShoppingCart, path: '/guides/jlc-order-guide', component: JLCOrderGuide },
    { id: 'kicad-submission', title: 'KiCad Submission', icon: FileText, path: '/guides/kicad-submission', component: KiCadSubmissionGuide },
    { id: 'oshwlab-tutorial', title: 'OSHWLab Tutorial', icon: Globe, path: '/guides/oshwlab-tutorial', component: OSHWLabTutorialGuide },
    { id: 'pcb-resources', title: 'PCB Resources', icon: Zap, path: '/guides/pcb-resources', component: PCBResourcesGuide },
    { id: 'wokwi-guide', title: 'Wokwi Guide', icon: Wrench, path: '/guides/wokwi-guide', component: WokwiGuide },
  ];

  const getGuideIdFromPath = (pathname) => {
    const pathParts = pathname.split('/');
    const guideId = pathParts[pathParts.length - 1];
    
    const validGuide = guides.find(guide => guide.id === guideId);
    return validGuide ? guideId : 'overview';
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      const path = window.location.pathname;
      const guideId = getGuideIdFromPath(path);
      
      setCurrentPath(path);
      setActiveGuide(guideId);
      setIsInitialized(true);

      const handlePopState = () => {
        const newPath = window.location.pathname;
        const newGuideId = getGuideIdFromPath(newPath);
        setCurrentPath(newPath);
        setActiveGuide(newGuideId);
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, [isInitialized, guides]);

  const selectedGuideData = guides.find(guide => guide.id === activeGuide) || guides[0];
  const SelectedGuideComponent = selectedGuideData.component;

  const handleNavigation = (path) => {
    if (typeof window !== 'undefined') {
      const guideId = getGuideIdFromPath(path);
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      setActiveGuide(guideId);
    }
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-slate-300">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      <div className="w-72 bg-slate-800/50 border-r border-slate-700 flex flex-col fixed h-full">
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold text-emerald-400">Guides</h1>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {guides.map((guide) => {
              const IconComponent = guide.icon;
              const isActive = activeGuide === guide.id;
              
              return (
                <li key={guide.id}>
                  <button
                    onClick={() => handleNavigation(guide.path)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                    title={guide.title}
                  >
                    <IconComponent className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium truncate">{guide.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex-1 overflow-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ml-72">
        <div className="p-6 text-slate-300">
          <SelectedGuideComponent />
        </div>
      </div>
    </div>
  );
}