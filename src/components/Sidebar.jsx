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
          "bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-4 font-mono text-slate-300",
          "transform transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "sm:translate-x-0"
        )}
      >
        <a
          href="/"
          className="mb-4 block text-3xl font-bold text-white transition-colors hover:text-green-500"
        >
          Grounded
        </a>

        <section className="space-y-1">
          <h2 className="mb-2 text-lg font-semibold text-white">Components Grant</h2>
          <a
            href="/components-overview"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Overview
          </a>
          <a
            href="/components-resources"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            How&nbsp;to&nbsp;use&nbsp;Wokwi
          </a>
        </section>

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
      </aside>
    </>
  );
};

export default SideBar;
