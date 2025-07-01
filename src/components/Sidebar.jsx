const SideBar = () => {
  return (
    <div className="w-60">
      <aside className="fixed bg-slate-600 space-y-4 max-w-prose p-4 h-screen border-r-4 border-slate-800 border-dashed hackclub-font text-slate-300">
        {/* Title */}
        <a
          href="/"
          className="block text-3xl font-bold text-white mb-4 hover:text-green-500 transition-colors"
        >
          Grounded
        </a>

        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-white">Components Grant</h2>
          <ul className="space-y-1">
            <li>
              <a href="/guide" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Overview
              </a>
            </li>
            <li>
              <a href="/resources" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                How to use Wokwi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 text-white">PCB Grant</h2>
          <ul className="space-y-1">
            <li>
              <a href="/pcb-overview" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Overview
              </a>
            </li>
            <li>
              <a href="/pcb-resources" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Design Resources
              </a>
            </li>
            <li>
              <a href="/jlcpcb-ordering" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Ordering from JCLPCB
              </a>
            </li>
            <li>
              <a href="/vendors" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Alternative Vendors
              </a>
            </li>
            <li>
              <a href="/kicad-guide" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Ki-Cad Beginner Guide
              </a>
            </li>
                        <li>
              <a href="/kicad-submission" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Ki-Cad Submission Guide
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
  