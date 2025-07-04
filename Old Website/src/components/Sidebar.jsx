"use client";

import { useState } from "react";
import clsx from "clsx";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Hamburger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
        className="fixed top-4 left-4 z-50 rounded-lg bg-slate-800 p-2 text-white shadow sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/*moble blur*/}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
        />
      )}

      {/*sidebar*/}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-60 overflow-y-auto border-r-4 border-dashed border-slate-800",
          "bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-4 pt-0 font-mono text-slate-300",
          "transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "sm:translate-x-0"
        )}
      >
        <a href="/" className="mb-4 block w-60 h-28 relative group mx-auto">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/93380dc2e825fc88413dc354972b31fbf6997ebb_grounded.svg"
            alt="Grounded"
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out backface-hidden group-hover:opacity-0"
            style={{ willChange: 'opacity' }}
          />

          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/d48d1c12c5393b1bad126d177dbcccd5334c3add_grounded_shadow.svg"
            alt="Grounded hover"
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out backface-hidden group-hover:opacity-100"
            style={{ willChange: 'opacity' }}
          />
        </a>






        <section className="mt-4 space-y-1">
          <h2 className="mb-2 text-lg font-semibold text-white">PCB Grant</h2>
          <a
            href="/pcb-overview"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Overview
          </a>
          <a
            href="/pcb-resources"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Design&nbsp;Resources
          </a>
          <a
            href="/pcb-submission"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Submission&nbsp;Guide
          </a>
          <a
            href="/pcb-ordering"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Ordering&nbsp;Guide
          </a>
        </section>
        <section className="space-y-1">
          <h2 className="mb-2 text-lg font-semibold text-white">Components Grant (coming soon!)</h2>

        </section>
      </aside>
    </>
  );
};

export default SideBar;
