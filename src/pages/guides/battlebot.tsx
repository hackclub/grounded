import React from "react";

const BattleBot = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-emerald-400">Battlebot Kit</h1>
                <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/42f09dc1c2c6e62e973f068aeb5addc397140feb_assembly_1.png" alt="Step 1" className="rounded-md" />

                <h1 className="text-4xl font-bold mb-4 text-emerald-400">Kit Contents</h1>
                <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>1x XIAO ESP32-C3</li>
                    <li>4x 5V N20 Motors</li>
                    <li>1x AMS1117 Buck Converter</li>
                    <li>2x DRV8833 Motor Controller Modules</li>
                    <li>4x Metal N20 Mounts</li>
                    <li>4x 30mm N20 Rubber Wheels for N20's</li>
                    <li>1x 3mm micro SPDT Switch</li>
                    <li>20x M3x16mm screws</li>
                    <li>1x Micro Servo</li>
                    <li>Up to a $10 grant for a LIPO Battery</li>
                    <li>Up to $20 for a PCB board</li>
                </ul>

                <h1 className="text-4xl font-bold mb-4 text-emerald-400 mt-10">How to get?</h1>
                <p>Follow the outline for the <a
              href="/guides/hardware-grant"
              className="text-emerald-400 underline hover:text-emerald-600"
              target=""
              rel="noopener noreferrer"
            >Grounded Hardware Grant</a></p>

            <p>Add the "Battlebot Kit" to the BOM</p>
            </div>
        </div>
    );
};

export default BattleBot;
