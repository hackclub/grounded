import React from "react";

export default function GroundedOverview() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6 space-y-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-emerald-400">Welcome to Grounded!</h1>
        <hr className="my-4 border-slate-700" />
        <p className="text-slate-400">
          Grounded is a YSWS run by Hack Club, a non-profit from Shelburne, Vermont.
        </p>
        <p className="text-slate-400">
          There are two main grants for Grounded: the PCBA grant and the hardware grant.
          You can find information about these two grants in{" "}
          <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#PCBA Overview</code> and{" "}
          <code className="bg-emerald-500/20 px-1 rounded text-emerald-400">#Hardware Overview</code> on the side.
        </p>
        <h1 className="pt-10 text-3xl font-bold text-emerald-400">PCBA Grant Project Ideas (#PCBA Overview)</h1>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Custom PCB Buisness Card</li>
          <li>A USB hub</li>
          <li>A tiny game console</li>
          <li>GPS Tracker</li>
        </ul>

        <h1 className="pt-10 text-3xl font-bold text-emerald-400">Hardware Grant Project Ideas (#Hardware Overview)</h1>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>A fairyweight battlebot</li>
          <li>A robot dog</li>
          <li>A DJ sound mixer board</li>
          <li>Smart RC Car with obstacle avoidance using ultrasonic and accelerometer</li>
          <li>Interactive LED Matrix Game Console with joystick and buzzer</li>
          <li>Modular Robotic Arm with stepper motors and XIAO RP2040 control</li>
          <li>Smart Door Lock with keypad, servo latch, and RTC logging</li>
          <li>Sound activated neopixel LEDS</li>
          <li>Interactive Puzzle Box with keypad, servo locks, and RGB LED feedback</li>
          <li>Portable Weather Station with large touchscreen and SD card data logging</li>
          <li>A small keyboard</li>
        </ul>
      </div>
    </div>
  );
}
