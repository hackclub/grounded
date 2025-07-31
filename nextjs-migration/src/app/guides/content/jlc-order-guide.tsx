import React from "react";

const HowToOrderFromJLCPCB = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="px-6 py-12 max-w-4xl mx-auto space-y-10 text-slate-300">
        <section>
          <h1 className="text-4xl font-bold mb-4 text-emerald-400">How to Order from JLCPCB</h1>
          <p className="text-lg text-slate-300">
            First time ordering from JLCPCB, or PCBs in general? Or do you just need a refresher on ordering PCBs? Either way, you're in the right place!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">Getting Gerbers</h2>
          <p className="mb-2">
            PCB fabs take files called <strong className="text-white">Gerbers</strong>. These are essentially outputted directions from whatever software you used (EasyEDA, KiCAD, etc) that contains information about the copper on the board, any silkscreen designs you have, and where to drill holes.
          </p>
          <p>
            Getting Gerbers is easy. They are usually under some sort of <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">export</code> or <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">output</code> section of your software.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">Uploading to JLCPCB</h2>
          <p>Once you have your Gerbers, make sure they are zipped up so you can upload the folder all in one piece.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">What the Heck are These Settings?</h2>
          <p>PCB fabs have <strong className="text-white">a lot</strong> of settings for board manufacturing, and JLCPCB is no exception. Here's a rundown on what each section means:</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-emerald-400">Base Options</h3>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc216d24e8d528d6ad0abca756f77ef570c2da01_base-options.png"
            alt="Base options"
            className="rounded-md shadow-lg max-w-full"
          />
          <ul className="list-disc list-inside mt-4 space-y-1 text-slate-300">
            <li><strong className="text-white">Base Material</strong>: Use FR-4.</li>
            <li><strong className="text-white">Layers</strong>: 2 or 4 layers are most common.</li>
            <li><strong className="text-white">Dimensions</strong>: Auto-filled from your Gerbers.</li>
            <li><strong className="text-white">PCB QTY</strong>: Choose 5 (minimum allowed).</li>
            <li><strong className="text-white">Product Type</strong>: Keep as Industrial/Consumer Electronics.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-emerald-400">PCB Specifications</h3>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/6d9b4cd159608e80a8102356a7af5b2d6973a447_pcb-specifications.png"
            alt="PCB specs"
            className="rounded-md shadow-lg max-w-full"
          />
          <ul className="list-disc list-inside mt-4 space-y-1 text-slate-300">
            <li><strong className="text-white">Different Design</strong>: Auto-calculated.</li>
            <li><strong className="text-white">Delivery Format</strong>: Use <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">Single PCB</code>.</li>
            <li><strong className="text-white">PCB Thickness</strong>: Keep at 1.6mm.</li>
            <li><strong className="text-white">PCB Color</strong>: Green is cheapest.</li>
            <li><strong className="text-white">Surface Finish</strong>: Lead-free HASL or ENIG.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-emerald-400">High-spec Options</h3>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/d5ccaac60a89163f1e602b053c8b63d8b13e800d_high-spec-options.png"
            alt="High-spec options"
            className="rounded-md shadow-lg max-w-full"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">PCB Assembly</h2>
          <p>
            Choose one of two assembly options for your PCB. <strong className="text-white">Assembly by JLCPCB</strong> is the quickest and easiest.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-emerald-400">Assembly by JLCPCB</h3>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a6fe8bd721b5c5fb98e09f8cdc78c75afb591e4b_assembly.png"
            alt="Assembly options"
            className="rounded-md shadow-lg max-w-full"
          />
          <ul className="list-disc list-inside mt-4 space-y-1 text-slate-300">
            <li><strong className="text-white">PCBA Type</strong>: Choose Economic.</li>
            <li><strong className="text-white">PCBA Qty</strong>: 2 is enough to save cost.</li>
            <li><strong className="text-white">Confirm Parts Placement</strong>: Optional, useful check.</li>
          </ul>
          <p className="mt-4 text-slate-300">
            Then upload your <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">bom.csv</code> and <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">positions.csv</code> (KiCad) or <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">BOM_PCB.csv</code> and <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">PickAndPlace.csv</code> (EasyEDA).
          </p>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/712ec605dca59fa99ae56a22f0a1125befd9a068_bom.png"
            alt="BOM Upload"
            className="rounded-md shadow-lg max-w-full mt-4"
          />
          <p className="mt-2 text-slate-400">
            If parts like the NFC antenna are unselected, click <em>"Do Not Place"</em>.
          </p>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9cdf44ed3edd19917da5a82fa9920a7c4790a1d0_orientation.png"
            alt="Orientation"
            className="rounded-md shadow-lg max-w-full mt-4"
          />
          <p className="text-sm mt-2 text-slate-500">
            Note: Resistors/capacitors are symmetrical, but diodes, LEDs, and ICs are not.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-emerald-400">Assemble Yourself with a Stencil</h3>
          <p className="mt-2 text-slate-300">
            Don't want to pay extra for assembly? DIY is a great, hands-on learning option, but it's for <strong className="text-white">advanced hackers</strong> only.
          </p>
          <p className="text-slate-300">You'll need a soldering iron, solder paste, and a heat gun or reflow tool.</p>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/38e294ff4d70aef27b91a2680c90539b8bc8345f_stencil.png"
            alt="Stencil"
            className="rounded-md shadow-lg max-w-full mt-4"
          />
          <p className="mt-2 text-slate-300">
            Learn more:{" "}
            <a
              href="https://www.youtube.com/watch?v=5AyxuuFjZSI"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline ml-1"
            >
              YouTube guide
            </a>{" "}
            or{" "}
            <a
              href="https://www.pcbelec.com/how-to-use-pcb-stencil.html"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline ml-1"
            >
              PCB Elec guide
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">Cart</h2>
          <p>Click <strong className="text-white">checkout</strong> and fill out your information.</p>
          <blockquote className="border-l-4 border-yellow-400 pl-4 text-yellow-300 bg-yellow-900/40 py-2 rounded">
            To avoid excess shipping fees or customs, check out the{" "}
            <a href="../community/shipping.md" className="text-emerald-400 underline">
              Shipping Tips
            </a>{" "}
            doc!
          </blockquote>
          <p className="mt-2">Then choose "Pay after Review" or "Pay Directly", and click <strong className="text-white">Submit Order</strong>.</p>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7faa4f457bb8e28b9a1e4bb43b1b94da9987df7b_submit-order.png"
            alt="Submit order"
            className="rounded-md shadow-lg max-w-full mt-4"
          />
          <p className="text-slate-400 mt-2">Once asked for payment info, you can just close the tab.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-emerald-400">PCB Review</h2>
          <p>
            Go to{" "}
            <a
              href="https://jlcpcb.com/user-center/orders/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline"
            >
              My Orders
            </a>{" "}
            and take a screenshot like below:
          </p>
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/51761af33c599ad46040b56176a516b543293c64_cart.png"
            alt="Cart screenshot"
            className="rounded-md shadow-lg max-w-full mt-4"
          />
          <p className="mt-2 text-slate-400">Name it exactly <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">cart.png</code> for GitHub submission.</p>
        </section>
      </div>
    </div>
  );
};

export default HowToOrderFromJLCPCB;