import React from "react";

export default function GroundedPCBGrant() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6 space-y-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-emerald-400">Grounded PCB Grant - Get up to $250 for a PCB</h1>
        <hr className="my-4 border-slate-700" />
        <p className="text-slate-400">
          Every student will receive up to <strong className="text-white">$250</strong> to cover PCB manufacturing costs,
          and join a community of peers — some more beginner and some more experienced.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-emerald-400">Requirements</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-300">
          <li>Unique and open-source design</li>
          <li>
            Must be orderable on JLCPCB or other{" "}
            <a
              href="https://github.com/hackclub/OnBoard/blob/main/docs/VENDORS.md"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline"
            >
              approved vendor
            </a>
          </li>
          <li>
            Must be in high school or younger and show proof of school enrollment to submit
          </li>
        </ul>
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
            <h3 className="text-xl font-semibold mb-2">2. Design a Board!</h3>
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
              NOTE: The price limit is $250 for PCBs made in EasyEDA but only $50 for PCBs made in KiCad
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Upload to a Vendor and Take a Screenshot</h3>
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
                ordering_from_JLCPCB.md
              </code>{" "}
              and{" "}
              <code className="bg-emerald-700 px-1 rounded">
                Shipping Tips
              </code>
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
            <h3 className="text-xl font-semibold mb-2">8. Ship it!</h3>
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
    </div>
  );
}
