import React from 'react';

export default function GroundedDesignResources() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <h1 className="text-4xl font-bold mb-6 text-emerald-400">Grounded Design Resources</h1>
      <p className="text-lg text-slate-400 mb-8">
        Never designed a PCB before? You're in the right place! The Grounded community has collected resources for you to get up-to-speed with circuit and PCB design! If you have any questions, feel free to ask in{' '}
        <a
          href="https://hackclub.slack.com/archives/C0948RT0C1M"
          className="text-emerald-400 underline hover:text-emerald-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          #grounded
        </a>
        .
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Electronic Basics</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            AfroTechMods&apos;{' '}
            <a
              href="https://www.youtube.com/watch?v=8gvJzrjwjds&list=PLzqS33DOPhJkRn6e9_OTdQwRojO8qlusI"
              className="text-emerald-400 underline hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Electronic for Beginners
            </a>
          </li>
          <li>
            GreatScott!:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                <a
                  href="https://www.youtube.com/watch?v=otQGdPLyF3w&list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0&index=42"
                  className="text-emerald-400 underline hover:text-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronic Basics #14: Capacitors
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=7w5I-KbJ1Sg&list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0&index=40"
                  className="text-emerald-400 underline hover:text-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronic Basics #16: Resistors
                </a>
              </li>
            </ul>
          </li>
          <li>
            ElectroBOOM:{' '}
            <a
              href="https://youtube.com/playlist?list=PLr_CZLgMkHeXc_45uIgYutY0m6fqmI5du&si=WIVFAfIjkPKWoWJn"
              className="text-emerald-400 underline hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Electronics Playlist
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">PCB Tutorials</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            <a
              href="https://jams.hackclub.com/jam/hacker-card"
              className="text-emerald-400 underline hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              PCB Business Card with NFC
            </a>
          </li>
          <li>
            <a
              href="https://jams.hackclub.com/batch/usb-hub"
              className="text-emerald-400 underline hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Build a USB Hub
            </a>
          </li>
          <li>
            <a
              href="https://jams.hackclub.com/batch/sparkletilt-pcb"
              className="text-emerald-400 underline hover:text-emerald-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Make a Digital Level
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
