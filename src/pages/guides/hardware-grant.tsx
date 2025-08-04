import React from "react";
import PartsGrid from "../../components/PartsGrid";

export default function GroundedHardwareGrant() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 px-6 py-12 space-y-12">
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold text-emerald-400">Grounded Hardware Grant</h1>
        <hr className="my-4 border-slate-700" />
        <p className="text-slate-400 text-lg">
          We have a lot of stuff in a bin at Hack Club and I need your help to turn the parts into projects!
        </p>
        
        <div className="bg-slate-900/60 rounded-lg p-6 border border-slate-700 text-left">
          <p className="text-slate-400 mb-4">
            You can use any of the components below to create a project along with:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-2 max-w-md mx-auto">
            <li>Up to $30 for a PCB (not PCBA) board</li>
            <li>Up to $20 for other parts you may need</li>
            <li>
              Free 3D prints through{" "}
              <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#print-legion</code>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900/60 rounded-lg p-6 border border-slate-700 text-left">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4 text-center">How to get approved</h2>
          <p className="text-slate-400 mb-4">
            Each project is individually reviewed. There is no limit to the complexity or the number of components required. Here are some tips to get accepted:
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-2 max-w-md mx-auto">
            <li>Don't keep it simple! Make a 3d printed case, add a pcb to link the components</li>
            <li>Don't use more expensive component or a component that is not needed. If you use a Raspberry PI Pico to blink a light, you will be rejected.</li>
            <li>Make a nice polished final project and make sure everything works. If possible, model your project in Wokwi.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-emerald-400">Getting Started</h2>

        <div className="space-y-8 text-slate-300">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Join <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#electronics</code> and <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#grounded</code> on Slack!</h3>
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
            <h3 className="text-xl font-semibold mb-3">2. Create your Github Repo & Start Your Journal</h3>
            <h4 className="text-lg font-medium mb-3 text-slate-300">If you rather not manage a journal, check out <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#Groundplane</code> on the sidebar</h4>

            <p className="mb-4">
              Create a git repository for your project! Most people use GitHub, but you can use any git provider you want.
            </p>

            <div className="bg-slate-900/60 rounded-lg p-4 my-4 border border-slate-700">
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">📝 Start Your Journal (Required for any custom projects!)</h4>
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
                Journaling or #Groundplane is mandatory for custom Hardware grants!
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-700">
              <h4 className="text-lg font-semibold mb-2 text-emerald-400">How to Journal Your Project</h4>
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
            <h3 className="text-xl font-semibold mb-3">3. Design your project</h3>
            <p className="mb-3">
              Look at the available parts below and start your project. A typical project will have a 3d model and if it is possible to, make a{" "}
              <a
                href="https://hackclub.com/slack/?event=grounded"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline"
              >
                Wokwi Simulation
              </a>{" "}
              of your circuit.
            </p>
            <p className="italic text-slate-500 mb-3">
              If you get stuck or want more example projects, post in the Slack channel.
            </p>
            <p>Just remember to update your journal throughout your entire project.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-emerald-400 text-center">Parts Inventory</h2>
        <PartsGrid />
      </section>

      <section className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-3">4. Submit your project</h3>
        <p className="mb-4">
          Once your project is fully designed, make sure you have a <code className="bg-emerald-700 px-1 rounded">JOURNAL.md</code>, the files for your project and any Wokwi links to your simulated circuit in your project. Once that is all good, fill out the form below to submit your project:
        </p>
        <div className="space-y-4">
          <p className="text-slate-300">Submit your project through this form:</p>
          <a 
            href="https://forms.hackclub.com/grounded-hardware" 
            target="_blank" 
            className="inline-block bg-emerald-500/20 px-4 py-2 rounded-md text-emerald-400 font-semibold hover:bg-emerald-500/30 transition"
          >
            🔗 Grounded Hardware Grant
          </a>
        </div>
      </section>
    </main>
  );
}