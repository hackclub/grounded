import React from "react";

export default function GroundedPCBGrant() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6 space-y-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-emerald-400">Grounded PCB Grant - Get up to $1k for a PCB</h1>
        <hr className="my-4 border-slate-700" />
        <p className="text-slate-400">
          Every teen under 18 (or 18) will receive up to <strong className="text-white">$1k</strong> to cover PCB manufacturing costs,
          and join a community of peers — some more beginner and some more experienced.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>Unique and open-source design</li>
          <li>Must be orderable on JLCPCB</li>
          <li>Must be in high school or younger and show proof of school enrollment to submit</li>
        </ul>
        <p className="text-red-600 font-semibold mt-2">
          NOTE: Grounded does not accept more than one "tutorial project" per person
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">Getting Started</h2>

        <div className="space-y-8 text-slate-300">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Join <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#electronics</code> on Slack!</h3>
            <p>
              Our{" "}
              <a
                href="https://hackclub.slack.com/archives/C0948RT0C1M"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline"
              >
                #electronics
              </a>{" "}
              channel is where the party is getting started! Sign up to our community via{" "}
              <a
                href="https://hackclub.com/slack/?event=grounded"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline"
              >
                this link
              </a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Create your Github Repo & Start Your Journal</h3>
            <p>
              Create a git repository for your project! Most people use GitHub, but you can use any git provider you want.
            </p>
            
            <div className="bg-slate-900/60 rounded-lg p-4 my-4 border border-slate-700">
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">📝 Start Your Journal (Required!)</h4>
              <p className="mb-3">
                Create a <code className="bg-emerald-700 px-1 rounded">JOURNAL.md</code> file in your repo. At the very top, include the following data:
              </p>
              <div className="bg-slate-800 rounded p-3 font-mono text-sm text-slate-300">
                <pre>{`---
Title: "Your PCB Project Name"
Author: "Your name (name or slack username)"
Description: "Describe your PCB project in a short sentence!"
Created On: "10/7/2025"
---`}</pre>
              </div>
              <p className="mt-3 text-yellow-400 font-semibold">
                ⚠️ Journaling is mandatory for PCB grants! Poor quality journals will be rejected.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-700">
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">How to Journal Your PCB Project</h4>
              <p className="mb-3">
                Document your progress every day! The general formatting should look like this:
              </p>
              <div className="bg-slate-800 rounded p-3 font-mono text-sm text-slate-300">
                <pre>{`# June 8th: Got the screen to work!

[actual journal content - what did you do?]

[insert pictures of what you're working on!]

**Total time spent: 2h**`}</pre>
              </div>
              <div className="mt-3 text-red-400">
                <p className="font-semibold">Do NOT have:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Wall of timestamps with barely any descriptions</li>
                  <li>No images</li>
                  <li>Terrible formatting that's impossible to read</li>
                  <li>AI generated journal entries; anything written by AI will be immediately rejected</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Design a Board!</h3>
            <p>
              Most people reading this will be new to PCB design, so we've made a simple tutorial on
              making an example board. Check out our{" "}
              <a
                href="https://jams.hackclub.com/tag/pcb"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline"
              >
                PCB tutorials
              </a>.
            </p>
            <p className="italic text-slate-500">
              If you get stuck or want more example projects, post in the Slack channel.
            </p>
            <p className="text-red-600 font-semibold mt-2">
              NOTE: The price limit is $1k for PCBs made in EasyEDA but only $30 for PCBs made in any other EDA software
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Upload to a Vendor and Take a Screenshot</h3>
            <p>
              Upload your Gerber files to{" "}
              <a
                href="https://jlcpcb.com/"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline"
              >
                JLCPCB.com
              </a>{" "}
              and take a screenshot after you finish checkout.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 text-slate-400 my-4 bg-slate-900/60 rounded">
              Curious about order settings or shipping tips?<br />
              See{" "}
              <code className="bg-emerald-700 px-1 rounded">
                How to Order from JLCPCB
              </code>{" "}
            </blockquote>
            <img
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/51761af33c599ad46040b56176a516b543293c64_cart__1_.png"
              alt="Cart Screenshot"
              className="w-full rounded shadow-lg"
            />
            <p className="text-sm text-slate-500 mt-2">
              <strong className="text-white">Note:</strong> Screenshot is <strong className="text-white">required</strong> for project approval.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Complete Your Repository Files</h3>
            <p>Your repository needs to contain the following files:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 mt-2">
              <li><code className="bg-emerald-700 px-1 rounded">README.md</code>: It also needs to contain photos of your schematic/rendered PCB</li>
              <li><code className="bg-emerald-700 px-1 rounded">JOURNAL.md</code>: Your complete project journal documenting your progress</li>
              <li><code className="bg-emerald-700 px-1 rounded">gerber.zip</code>: This should be the file that you send off to the vendor</li>
              <li><code className="bg-emerald-700 px-1 rounded">schematic.pdf</code>: Export the schematic from your EDA program as a PDF</li>
              <li className="pl-6">Go to File → Export → PDF in EasyEDA's Schematic tab for this</li>
              <li><code className="bg-emerald-700 px-1 rounded">src/</code>: Make a folder called src and whatever format your designer outputs should be included</li>
              <li className="pl-6">For EasyEDA STD, you need to File → Export → EasyEDA two JSON files - one from the schematic tab and one from the PCB tab</li>
              <li className="pl-12">Optionally, for EasyEDA STD, export a 3D Model as .obj and save it to the /src folder</li>
              <li className="pl-6">For KiCad, add the .kicad_pcb, .kicad_sch and .kicad_pro files to your /src folder</li>
            </ul>
            
            <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 mt-4">
              <h4 className="text-lg font-semibold text-red-400 mb-2">IMPORTANT!! Required for EasyEDA Grants!!!</h4>
              <p className="text-red-300">Make sure to follow all EasyEDA export requirements above for your submission to be approved.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Ship it!</h3>
            <p>
              Share your board in{" "}
              <a
                href="https://hackclub.slack.com/archives/C056AMWSFKJ"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline"
              >
                #electronics
              </a>!
            </p>
            <img
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/54d28c4e1c05457e39b2191c79389a7e550aad65_john-sharing-pcb.png"
              alt="PCB Sharing"
              className="w-full rounded shadow-lg mt-2"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">Example Projects</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>
            <a
              href="https://jams.hackclub.com/jam/hacker-card"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline"
            >
              PCB Business Card with NFC, "Hackercard"
            </a>
          </li>
          <li>
            <a
              href="https://jams.hackclub.com/batch/usb-hub"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline"
            >
              Build a USB Hub
            </a>
          </li>
          <li>
            <a
              href="https://jams.hackclub.com/batch/sparkletilt-pcb"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline"
            >
              Make a Digital Level
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">Tips for Success</h2>
        <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-700">
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Keep your journal updated daily - small, consistent entries are better than large sporadic ones</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Document your failures too! They're just as important as your successes</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Include plenty of photos and screenshots throughout your process</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Ask questions in the Slack channel - the community is there to help!</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-2">•</span>
              <span>Be resourceful with your budget - every dollar saved helps fund the next program</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}