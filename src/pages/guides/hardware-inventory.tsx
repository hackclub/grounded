import React from "react";
import PartsGrid from "../../components/PartsGrid";
import { PartsProvider } from '@/components/PartsWrapper';



export default function HardwareInventory() {
  return (
    <div className="min-h-screen w-full p-6 space-y-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-400">Hardware Grant Inventory</h1>
        <hr className="my-4 border-slate-700" />
      </div>

      <PartsProvider>
        <PartsGrid />
      </PartsProvider>
    </div>

  );
}
