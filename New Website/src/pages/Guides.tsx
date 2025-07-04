import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronDown, ExternalLink, Zap, Shield, Download, Upload, Settings, CreditCard, Eye, Wrench } from 'lucide-react';

const TutorialSystem = () => {
  const [activeSection, setActiveSection] = useState('jlcpcb-ordering');
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'ordering': true,
    'design': false,
    'resources': false
  });

  const tutorials = {
    'getting-started': {
      title: 'Getting Started',
      icon: <BookOpen className="w-4 h-4" />,
      items: [
        { id: 'onboard-grant', title: 'OnBoard Grant Overview', icon: <CreditCard className="w-4 h-4" /> },
        { id: 'requirements', title: 'Requirements & Eligibility', icon: <Shield className="w-4 h-4" /> },
        { id: 'first-steps', title: 'First Steps', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    'ordering': {
      title: 'Ordering PCBs',
      icon: <Upload className="w-4 h-4" />,
      items: [
        { id: 'jlcpcb-ordering', title: 'How to Order from JLCPCB', icon: <Upload className="w-4 h-4" /> },
        { id: 'gerber-files', title: 'Generating Gerber Files', icon: <Download className="w-4 h-4" /> },
        { id: 'assembly-options', title: 'Assembly Options', icon: <Wrench className="w-4 h-4" /> }
      ]
    },
    'design': {
      title: 'PCB Design',
      icon: <Settings className="w-4 h-4" />,
      items: [
        { id: 'kicad-tutorial', title: 'KiCad Tutorial', icon: <Settings className="w-4 h-4" /> },
        { id: 'easyeda-tutorial', title: 'EasyEDA Tutorial', icon: <Settings className="w-4 h-4" /> },
        { id: 'design-tips', title: 'Design Tips & Best Practices', icon: <Eye className="w-4 h-4" /> }
      ]
    },
    'resources': {
      title: 'Resources',
      icon: <BookOpen className="w-4 h-4" />,
      items: [
        { id: 'electronics-basics', title: 'Electronics Basics', icon: <Zap className="w-4 h-4" /> },
        { id: 'example-projects', title: 'Example Projects', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'community', title: 'Community & Support', icon: <ExternalLink className="w-4 h-4" /> }
      ]
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getCurrentContent = () => {
    switch (activeSection) {
      case 'jlcpcb-ordering':
        return <JLCPCBOrderingContent />;
      case 'onboard-grant':
        return <OnBoardGrantContent />;
      case 'requirements':
        return <RequirementsContent />;
      case 'first-steps':
        return <FirstStepsContent />;
      case 'gerber-files':
        return <GerberFilesContent />;
      case 'assembly-options':
        return <AssemblyOptionsContent />;
      case 'kicad-tutorial':
        return <KiCadTutorialContent />;
      case 'easyeda-tutorial':
        return <EasyEDAContent />;
      case 'design-tips':
        return <DesignTipsContent />;
      case 'electronics-basics':
        return <ElectronicsBasicsContent />;
      case 'example-projects':
        return <ExampleProjectsContent />;
      case 'community':
        return <CommunityContent />;
      default:
        return <JLCPCBOrderingContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700/50 shadow-2xl">
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">OnBoard</h1>
                <p className="text-sm text-slate-400">PCB Design Tutorials</p>
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            {Object.entries(tutorials).map(([sectionKey, section]) => (
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
                
                {expandedSections[sectionKey] && (
                  <div className="ml-4 space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors text-left ${
                          activeSection === item.id 
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
          <div className="max-w-4xl mx-auto p-8">
            <div className="prose prose-invert prose-emerald max-w-none">
              {getCurrentContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JLCPCBOrderingContent = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
      How to Order from JLCPCB
    </h1>
    
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
      <p className="text-lg text-slate-300 leading-relaxed">
        First time ordering from JLCPCB, or PCBs in general? Or do you just need a refresher on ordering PCBs? Either way, you're in the right place!
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Getting Gerbers</h2>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <p className="mb-4 text-slate-300">
        PCB fabs take files called Gerbers. These are essentially outputted directions from whatever software you used (EasyEDA, KiCAD, etc) that contains information about the copper on the board, any silkscreen designs you have, and where to drill holes.
      </p>
      <p className="text-slate-300">
        Getting Gerbers are easy. They will usually be under some sort of <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">export</code> or <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">output</code> section of your software.
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Uploading to JLCPCB</h2>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <p className="text-slate-300">
        Once you have your Gerbers, make sure they are zipped up. This is so that you can upload the folder all in one piece.
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">What the Heck are These Settings?</h2>
    <p className="mb-6 text-slate-300">
      PCB fabs have <em>A LOT</em> of settings for board manufacturing, and JLCPCB is no exception. Here's a rundown on what each section means:
    </p>

    <h3 className="text-xl font-semibold mb-4 text-blue-400">Base Options</h3>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc216d24e8d528d6ad0abca756f77ef570c2da01_base-options.png" alt="Base options for JLCPCB" className="rounded-lg mb-4" />
      <ul className="space-y-3 text-slate-300">
        <li><strong className="text-emerald-400">Base Material</strong>: What material you're going to make the PCBs out of. For OnBoard purposes, your board will be made out of FR-4.</li>
        <li><strong className="text-emerald-400">Layers</strong>: The number of copper layers in your design. This should be auto-filled. 2 or 4 layer PCBs are most common. Note that 6+ layers cost more!</li>
        <li><strong className="text-emerald-400">Dimensions</strong>: The size of your PCB. Should be auto-populated from your gerbers.</li>
        <li><strong className="text-emerald-400">PCB QTY</strong>: Number of PCBs you're ordering. The OnBoard grant only allows the minimum, usually 5.</li>
        <li><strong className="text-emerald-400">Product Type</strong>: Keep it as Industrial/Consumer Electronics.</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mb-4 text-blue-400">PCB Specifications</h3>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6d9b4cd159608e80a8102356a7af5b2d6973a447_pcb-specifications.png" alt="PCB specifications for JLCPCB" className="rounded-lg mb-4" />
      <ul className="space-y-3 text-slate-300">
        <li><strong className="text-emerald-400">Different Design</strong>: Number of designs in your gerber files. Auto-calculated.</li>
        <li><strong className="text-emerald-400">Delivery Format</strong>: Single PCB for most boards. Consider panelization for keychain-sized boards.</li>
        <li><strong className="text-emerald-400">PCB Thickness</strong>: Default 1.6mm. Don't change - other thickness requires expensive Standard PCBA.</li>
        <li><strong className="text-emerald-400">PCB Color</strong>: Green, blue, or black are cheapest. Other colors cost significantly more.</li>
        <li><strong className="text-emerald-400">Surface Finish</strong>: HASL (silvery), Lead-free HASL (safer), or ENIG (gold, expensive but pretty).</li>
      </ul>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">PCB Assembly</h2>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <p className="mb-4 text-slate-300">
        Choose one of the two assembly options for your PCB. <strong className="text-emerald-400">Assembly by JLCPCB</strong> is the quickest and easiest.
      </p>
      
      <h4 className="text-lg font-semibold mb-3 text-blue-400">Assembly by JLCPCB</h4>
      <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a6fe8bd721b5c5fb98e09f8cdc78c75afb591e4b_assembly.png" alt="Assembly by JLCPCB" className="rounded-lg mb-4" />
      <ul className="space-y-2 text-slate-300 mb-4">
        <li><strong className="text-emerald-400">PCBA Type</strong>: Economic. Standard PCBA is very expensive.</li>
        <li><strong className="text-emerald-400">PCBA Qty</strong>: Choose 2 to save grant money. They'll ship 3 bare boards too.</li>
        <li><strong className="text-emerald-400">Confirm Parts Placement</strong>: Manual check for correct part orientation (small fee).</li>
      </ul>
    </div>

    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 mb-6">
      <h4 className="text-lg font-semibold mb-3 text-emerald-400">💡 Pro Tip</h4>
      <p className="text-slate-300">
        Upload your <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">bom.csv</code> and <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">positions.csv</code> (KiCAD) or <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">BOM_PCB.csv</code> and <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">PickAndPlace.csv</code> (EasyEDA) files on the next screen.
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Final Steps</h2>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <p className="mb-4 text-slate-300">
        After reaching the cart, click checkout and fill out the information. Take a screenshot of your order for the OnBoard grant and save it as <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">cart.png</code>.
      </p>
      <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/51761af33c599ad46040b56176a516b543293c64_cart.png" alt="Cart screenshot" className="rounded-lg" />
    </div>
  </div>
);

const OnBoardGrantContent = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
      OnBoard Grant - Get up to $250 for PCBs
    </h1>
    
    <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-500/30 rounded-xl p-6 mb-8">
      <p className="text-lg text-slate-300 leading-relaxed">
        Every student receives up to $250 to cover PCB manufacturing costs and joins a community of peers — some more beginner and some more experienced.
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Requirements</h2>
    <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
      <ul className="space-y-3 text-slate-300">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>Unique and open-source design</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>Must be orderable on JLCPCB or other approved vendor</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
          <span>Must be in high school or younger and show proof of school enrollment</span>
        </li>
      </ul>
    </div>

    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
      <h4 className="text-lg font-semibold mb-3 text-yellow-400">⚠️ Important Note</h4>
      <p className="text-slate-300">
        The price limit is $250 for PCBs made in EasyEDA but only $50 for PCBs made in KiCAD.
      </p>
    </div>

    <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Getting Started</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-slate-800/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-400">1. Join #electronics on Slack</h3>
        <p className="text-slate-300 mb-4">
          Our electronics channel is where the party is getting started!
        </p>
        <a href="https://hackclub.com/slack/?event=onboard" className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
          <span>Join the community</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="bg-slate-800/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-400">2. Design a Board</h3>
        <p className="text-slate-300 mb-4">
          Most people reading this will be new to PCB design. We've made simple tutorials!
        </p>
        <a href="https://jams.hackclub.com/tag/pcb" className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
          <span>PCB Tutorials</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const RequirementsContent = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
      Requirements & Eligibility
    </h1>
    
    <div className="space-y-6">
      <div className="bg-slate-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Who Can Apply?</h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>High school students or younger</span>
          </li>
          <li className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>Must provide proof of school enrollment</span>
          </li>
          <li className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <span>Must be willing to share your design open-source</span>
          </li>
        </ul>
      </div>

      <div className="bg-slate-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Design Requirements</h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <span>Must be a unique, original design (not a copy of existing boards)</span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <span>Must be manufacturable by JLCPCB or approved vendors</span>
          </li>
          <li className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <span>Must include proper documentation (README, schematic, etc.)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const FirstStepsContent = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
      First Steps
    </h1>
    
    <div className="space-y-6">
      <div className="bg-slate-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Step 1: Learn the Basics</h2>
        <p className="text-slate-300 mb-4">
          Before diving into PCB design, it's helpful to understand basic electronics concepts.
        </p>
        <div className="space-y-2">
          <a href="https://www.youtube.com/watch?v=8gvJzrjwjds&list=PLzqS33DOPhJkRn6e9_OTdQwRojO8qlusI" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span>Electronics for Beginners - AfroTechMods</span>
          </a>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Step 2: Choose Your Tools</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-slate-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-2">EasyEDA</h3>
            <p className="text-sm text-slate-300">Web-based, beginner-friendly, $250 grant limit</p>
          </div>
          <div className="bg-slate-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-2">KiCAD</h3>
            <p className="text-sm text-slate-300">Professional, open-source, $50 grant limit</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Step 3: Join the Community</h2>
        <p className="text-slate-300 mb-4">
          Connect with other makers and get help when you need it!
        </p>
        <a href="https://hackclub.slack.com/archives/C0587U78RK4" className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
          <span>Join #electronics on Slack</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const GerberFilesContent = () => (
  <div>
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
      Generating Gerber Files
    </h1>
    
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
      <p className="text-lg text-slate-300 leading-relaxed">
        Gerber files are the industry standard for PCB manufacturing. They contain all the information needed to fabricate your PCB.
      </p>
    </div>

    <div className="space-y-6">
      <div className="bg-slate-800/30 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">What are Gerber Files?</h2>
        <p className="text-slate-300 mb-4">
          Gerber files contain detailed instructions for PCB manufacturing, including:
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>• Copper layer patterns</li>
          <li>• Drill hole locations and sizes</li>
          <li>• Solder mask openings</li>
          <li>• Silkscreen text and graphics</li>
          <li>• Board outline</li>
        </ul>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-slate-800/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-400">From EasyEDA</h3>
          <ol className="space-y-2 text-slate-300">
            <li>1. Open your PCB design</li>
            <li>2. Go to <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Fabrication</code> → <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">PCB Fabrication File (Gerber)</code></li>
            <li>3. Download the generated ZIP file</li>
          </ol>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-400">From KiCAD</h3>
          <ol className="space-y-2 text-slate-300">
            <li>1. Open PCB Layout Editor</li>
            <li>2. Go to <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">File</code> → <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Plot</code></li>
            <li>3. Select all necessary layers</li>
            <li>4. Generate drill files separately</li>
            <li>5. ZIP all files together</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default function Guides() {
  return (
    <div>
      <TutorialSystem />
      <JLCPCBOrderingContent />
      <OnBoardGrantContent />
      <RequirementsContent />
      <FirstStepsContent />
      <GerberFilesContent />
    </div>
  );
}