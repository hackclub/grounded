import React from "react";

export default function KiCadSubmission() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <h2 className="text-3xl font-bold mb-6 text-emerald-400">Submitting KiCad to Grounded</h2>

      <p className="mb-4 text-slate-300">Uniquely for KiCad, you'll need:</p>
      <ul className="list-disc list-inside mb-6 space-y-1 text-slate-300">
        <li><code className="bg-emerald-500/20 px-1 rounded text-emerald-400">.kicad_pcb</code>, file representing the KiCad PCB Layout</li>
        <li><code className="bg-emerald-500/20 px-1 rounded text-emerald-400">.kicad_sch</code>, for your schematic</li>
        <li><code className="bg-emerald-500/20 px-1 rounded text-emerald-400">.kicad_pro</code>, your project file</li>
        <li><code className="bg-emerald-500/20 px-1 rounded text-emerald-400">.wrl</code> 3D Model of your PCB</li>
      </ul>

      <p className="mb-6 text-slate-300">
        All within the <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">/src</code> folder in your project directory.
      </p>

      <p className="mb-6 text-slate-300">
        To get the first three, simply save all your KiCad files and close out of KiCad, then navigate to the directory and copy those three files into another folder and give them appropriate names.
      </p>

      <p className="mb-6 text-slate-300">
        For <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">schematic.pdf</code>, you'll want to be in the KiCad schematic editor, then go to <strong>File &gt; Plot &gt; Plot Current Page</strong>, after changing the output directory to where you want to put it. You'll need to rename the schematic to <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">schematic.pdf</code>. Ensure you've selected to plot all pages and have it in PDF.
      </p>

      <p className="mb-6 text-slate-300">
        Lastly, for your <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">.wrl</code> 3D Model, go to your KiCad PCB editor then go to <strong>File &gt; Export &gt; VRML</strong>, then press OK. Make sure you have <strong>"User Defined Origin"</strong> set and output it to the correct directory. Ensure it has an appropriate name.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-emerald-400">
        <strong>This is <u><em>in addition</em></u> to standard required files in the root <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">README.md</code> file.</strong>
      </h3>

      <div className="bg-slate-800 p-5 rounded-lg border border-slate-700 mt-4 text-slate-300">
        <p className="mb-3 font-medium">In all, you should have the following files under your project folder:</p>
        <ul className="list-none space-y-3">
          <li>
            📝 <strong className="text-white">README.md</strong>: A filled out{" "}
            <a href="./projects/!Template/>TEMPLATE.md?plain=1" className="text-emerald-400 underline">
              TEMPLATE.md
            </a>, renamed to <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">README.md</code>
          </li>
          <li>
            🖼️ <strong className="text-white">cart.png</strong>: A{" "}
            <a href="./docs/images/ordering/cart.png" className="text-emerald-400 underline">
              screenshot
            </a>{" "}
            of your order details
          </li>
          <li>
            🗜️ <strong className="text-white">gerber.zip</strong>: The file you send off to the vendor
          </li>
          <li>
            📄 <strong className="text-white">schematic.pdf</strong>: Exported from your EDA program as a PDF
            <ul className="list-disc list-inside ml-5 mt-2 text-sm text-slate-400">
              <li>Go to <strong>File &gt; Export &gt; PDF</strong> in EasyEDA's Schematic tab for this</li>
            </ul>
          </li>
        </ul>
        <p className="mt-5">This is as well as the KiCad files in the <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">/src</code> folder as listed above.</p>
      </div>
    </div>
  );
}
